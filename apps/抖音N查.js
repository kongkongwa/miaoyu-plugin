import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class dy extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi本地版抖音N查',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 1,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^查抖音直播(.*)$',
          /** 执行方法 */
          fnc: 'cdy'
        },
        {
          /** 命令正则匹配 */
          reg: '^查抖音场次(.*)$',
          /** 执行方法 */
          fnc: 'cdycc'
        },
        {
          /** 命令正则匹配 */
          reg: '^抖音直播列表$',
          /** 执行方法 */
          fnc: 'dyzblb'
        }
      ]
    })
  }


  async cdy (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查抖音直播","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Douyin/DouyinLiveChartsAsync?data=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cdycc (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查抖音场次","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://bt.bilibilimeumy.com:9082/api/Douyin/DouyinLiveList?sign=${msg[0]}&max=50`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  
 


  async dyzblb (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/Douyin/GetLiveState'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


 


  
}