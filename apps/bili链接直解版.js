import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class set extends plugin {
constructor () {
    super({
      /** 功能名称 */
    name: 'Yuapi B站解析',
      /** 功能描述 */
    dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
    event: 'message',
      /** 优先级，数字越小等级越高 */
    priority: 5000,
    rule: [
        {
            /** 命令正则匹配 */
        reg: '(https?:\/\/)?(www\.)?(bilibili\.com|b23\.tv)(.*)',
            /** 执行方法 */
        fnc: 'bijx'
        },
    ]
    })
 }
 async bijx (e) {
    /** e.msg 用户的命令消息 */
  logger.info('[用户命令]', e.msg)
  let msg = e.msg.replace("","").trim()
  msg = encodeURIComponent(msg)
  let url = `http://127.0.0.1:5187/api/BiliOther/BiliAnalysisVideo?data=${msg}`
  /** 默认写入配置tiktok为开启，如不需要把后面的  tiktok=true  改为  tiktok=false */
  await e.reply(segment.image(url))
}
}
