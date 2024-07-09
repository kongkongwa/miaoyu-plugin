import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'

export class jx extends plugin {
constructor () {
    super({
      /** 功能名称 */
    name: 'Yuapi小红书解析',
      /** 功能描述 */
    dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
    event: 'message',
      /** 优先级，数字越小等级越高 */
    priority: 5000,
    rule: [
        {
            /** 命令正则匹配 */
        reg: '(xiaohongshu.com|xhslink.com)(.*)',
            /** 执行方法 */
        fnc: 'hsjx'
        }
    ]
    })
 }
 async hsjx (e) {
    /** e.msg 用户的命令消息 */
  logger.info('[用户命令]', e.msg)
  let msg = e.msg.replace("","").trim()
  msg = encodeURIComponent(msg)
  let url = `http://127.0.0.1:5187/api/RedBook/RedBookHybrid?sign=${msg}`
  await e.reply(segment.image(url))
 }


}