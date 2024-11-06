import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class zs extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi本地版B站走势',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^弹幕走势(.*)$',
          /** 执行方法 */
          fnc: 'dmzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^礼物走势(.*)$',
          /** 执行方法 */
          fnc: 'lwzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^入场走势(.*)$',
          /** 执行方法 */
          fnc: 'rczs'
        },
        {
          /** 命令正则匹配 */
          reg: '^互动走势(.*)$',
          /** 执行方法 */
          fnc: 'hdzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^看过走势(.*)$',
          /** 执行方法 */
          fnc: 'kgzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^在线走势(.*)$',
          /** 执行方法 */
          fnc: 'zszs'
        },
        {
          /** 命令正则匹配 */
          reg: '^SC走势(.*)$',
          /** 执行方法 */
          fnc: 'sc'
        },
        {
          /** 命令正则匹配 */
          reg: '^粉丝团走势(.*)$',
          /** 执行方法 */
          fnc: 'fstzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^点赞走势(.*)$',
          /** 执行方法 */
          fnc: 'dzzs'
        }
      ]
    })
  }


  async dmzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("弹幕走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/BarrageCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async lwzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("礼物走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/GiftCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  
  async rczs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("入场走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/AdmissionCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async hdzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("互动走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/InteractionCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  
 async kgzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("看过走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/WatchedCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async zszs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("在线走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/OnlineCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async sc (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("SC走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/SuperChatCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async fstzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("粉丝团走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/FansClubCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async dzzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("点赞走势","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLiveECharts/ClickCount?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }
  
}