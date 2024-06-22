import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';

export class up extends plugin {
  constructor() {
    super({
      name: 'Yuapi更新',
      dsc: '简单开发示例',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^miaoyu更新$',
          fnc: 'gx',
        }
      ]
    });
  }

  async gx(e) {
    logger.info('[用户命令]', e.msg);

    try {
      // 目标目录路径
      const targetDir = path.join('plugins', 'miaoyu-plugin');

      // 检查目标目录是否存在，如果不存在则创建
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        logger.info('目标目录不存在，已创建...');
      }

      // 初始化simple-git实例
      const git = simpleGit(targetDir);

      // 检查目标目录是否存在并且是Git仓库
      const isGitRepo = await git.checkIsRepo();
      if (!isGitRepo) {
        // 如果不是Git仓库，克隆仓库
        logger.info('目标目录不存在或不是Git仓库，正在克隆...');
        await e.reply(`miaoyu更新中...`)
        await git.clone('https://gitee.com/kongkongjiang/miaoyu-plugin.git', '.', ['--recursive']);
      } else {
        // 如果是Git仓库，则更新
        logger.info('目标目录存在且是Git仓库，正在更新...');
        await e.reply(`miaoyu更新中...嗷呜`)
        await git.fetch(['--all', '--prune']);
        await git.reset(['--hard', 'origin/master']);
        await git.pull(['--force']);
      }
    } catch (err) {
      logger.error('[执行过程错误]', err);
      await e.reply(`miaoyu更新失败，请检查日志`)
    }
    await e.reply(`miaoyu更新完成,请用重启指令重启yunzai咩~QAQ`)
    
    
  }
}