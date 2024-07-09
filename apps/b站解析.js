import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'

export class jx extends plugin {
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
        reg: '(bilibili\.com|b23\.tv)(.*)',
            /** 执行方法 */
        fnc: 'bijx'
        },
        {
            /** 命令正则匹配 */
        reg: '^#?解析(.*)$',
            /** 执行方法 */
        fnc: 'bzjx'
        }
    ]
    })
 }
 async bijx (e) {
    /** e.msg 用户的命令消息 */
  logger.info('[用户命令]', e.msg)
  let msg = e.msg.replace("","").trim()
  msg = encodeURIComponent(msg)
  let url = `http://bt.bilibilimeumy.com:9082/api/BiliOther/BiliAnalysisVideo?data=${msg}`
  await e.reply(segment.image(url))
 }

 async bzjx (e) {
  /** e.msg 用户的命令消息 */
  logger.info('[用户命令]', e.msg)
  let msg = e.msg.replace("解析","").trim()
  msg = msg.split(" ")
  if(msg['length']==1){

      let url = `http://bt.bilibilimeumy.com:9082/api/BiliOther/BiliAnalysisVideo?data=${msg[0]}`
     /** 调用接口获取数据 */

  /** 最后回复消息 */
  await e.reply(segment.image(url))
   }
 }

}