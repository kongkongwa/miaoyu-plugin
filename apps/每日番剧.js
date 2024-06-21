import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class fj extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi每日番剧',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^每日番剧$',
          /** 执行方法 */
          fnc: 'tksj'
        }
      ]
    })
  }

  async tksj (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliOther/BiliAnimeUpdates'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }
 

}