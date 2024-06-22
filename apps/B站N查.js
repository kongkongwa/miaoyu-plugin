import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class nc extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi本地版B站N查',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 1,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^查直播(.*)$',
          /** 执行方法 */
          fnc: 'czb'
        },
        {
          /** 命令正则匹配 */
          reg: '^查场次(.*)$',
          /** 执行方法 */
          fnc: 'cc'
        },
        {
          /** 命令正则匹配 */
          reg: '^查成分(.*)$',
          /** 执行方法 */
          fnc: 'ccf'
        },
        {
          /** 命令正则匹配 */
          reg: '^查藏品(.*)$',
          /** 执行方法 */
          fnc: 'ccp'
        },
        {
          /** 命令正则匹配 */
          reg: '^查视频(.*)$',
          /** 执行方法 */
          fnc: 'csp'
        },
        {
          /** 命令正则匹配 */
          reg: '^查充电(.*)$',
          /** 执行方法 */
          fnc: 'ccd'
        },
        {
          /** 命令正则匹配 */
          reg: '^查房管(.*)$',
          /** 执行方法 */
          fnc: 'cfg'
        },
        {
          /** 命令正则匹配 */
          reg: '^查关注(.*)$',
          /** 执行方法 */
          fnc: 'cgz'
        },
        {
          /** 命令正则匹配 */
          reg: '^查航海(.*)$',
          /** 执行方法 */
          fnc: 'chh'
        },
        {
          /** 命令正则匹配 */
          reg: '^查牌子(.*)$',
          /** 执行方法 */
          fnc: 'cpz'
        },
        {
          /** 命令正则匹配 */
          reg: '^查uid牌子(.*)$',
          /** 执行方法 */
          fnc: 'cpzu'
        },
        {
          /** 命令正则匹配 */
          reg: '^查装扮(.*)$',
          /** 执行方法 */
          fnc: 'zb'
        },
        {
          /** 命令正则匹配 */
          reg: '^查粉丝团(.*)$',
          /** 执行方法 */
          fnc: 'fst'
        },
        {
          /** 命令正则匹配 */
          reg: '^查房间状态(.*)$',
          /** 执行方法 */
          fnc: 'cfjzt'
        },
        {
          /** 命令正则匹配 */
          reg: '^查盲盒(.*)$',
          /** 执行方法 */
          fnc: 'cm'
        },
        {
          /** 命令正则匹配 */
          reg: '^盲盒详情(.*)$',
          /** 执行方法 */
          fnc: 'cmxq'
        },
        {
          /** 命令正则匹配 */
          reg: '^查金额排行(.*)$',
          /** 执行方法 */
          fnc: 'cjpx'
        },
        {
          /** 命令正则匹配 */
          reg: '^查入场排行(.*)$',
          /** 执行方法 */
          fnc: 'crc'
        },
        {
          /** 命令正则匹配 */
          reg: '^查弹幕排行(.*)$',
          /** 执行方法 */
          fnc: 'cdm'
        },
        {
          /** 命令正则匹配 */
          reg: '^直播列表$',
          /** 执行方法 */
          fnc: 'zblb'
        },
        {
          /** 命令正则匹配 */
          reg: '^YUAPI帮助$',
          /** 执行方法 */
          fnc: 'ybz'
        },
        {
          reg: '^B站登录$|^刷新B站登录状态$|^添加入库(.*)$|^取消入库(.*)$|^网易云登录$|^抖音入库(.*)$',
          fnc: 'master'//执行方法
        }
      ]
    })
  }


  async czb (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查直播","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/BiliLiveCharts?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cc (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查场次","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/BiliLiveList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  
  async ccf (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查成分","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliComponent?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async ccp (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查藏品","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliCollection?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  
 async csp (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查视频","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliSpacevideo?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async ccd (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查充电","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliBattery?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cfg (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查房管","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliAnchor?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cgz (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查关注","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliFollow?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async chh (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查航海","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliCap?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cpz (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查牌子","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliFanscard?type=1&sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cpzu (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查uid牌子","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliFanscard?type=0&sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async zb (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查装扮","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliDress?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async fst (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查粉丝团","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliFan?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  async cfjzt (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查房间状态","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/Bili/BiliRoomState?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  async cm (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查盲盒","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetVtbBlindBoxList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cmxq (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("盲盒详情","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetUserBlindBoxList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cjpx (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查金额排行","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetBiggerPriceUserList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }

  async crc (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查入场排行","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetBiggerIntoUserList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }


  async cdm (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查弹幕排行","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetBiggerMsgUserList?sign=${msg[0]}`
       /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
  }




  async zblb (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliLive/GetLiveState'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async ybz (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/Menu/MenuList'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }

  async master(e){
    if (e.isMaster) return false;//判断用户权限是否是主人
    e.reply(`用户权限不足，\n该命令仅主人可用nya~`)//回复消息，可以可以自己修改，别把``这两个字符删掉就行，\n是换行（也可以直接注释掉这一行，不作回复）
    return true;
  }


  
}