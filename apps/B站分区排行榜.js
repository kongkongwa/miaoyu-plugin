import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class px extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'YuapiB站分区排行榜',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^直播热榜$',
          /** 执行方法 */
          fnc: 'xnfq'
        },
        {
          /** 命令正则匹配 */
          reg: '^超能用户$',
          /** 执行方法 */
          fnc: 'cnyh'
        },
        {
          /** 命令正则匹配 */
          reg: '^主播舰队$',
          /** 执行方法 */
          fnc: 'zbjd'
        },
        {
          /** 命令正则匹配 */
          reg: '^船员价值$',
          /** 执行方法 */
          fnc: 'cyjz'
        },
        {
          /** 命令正则匹配 */
          reg: '^船员人数$',
          /** 执行方法 */
          fnc: 'cyrs'
        },
        {
          /** 命令正则匹配 */
          reg: '^视频热榜$',
          /** 执行方法 */
          fnc: 'sprb'
        }
      ]
    })
  }

  async xnfq (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliLiveHot'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async cnyh (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliLiveFeedingRank'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async zbjd (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliLiveDailyBoatValueRank'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async cyjz (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliLiveDailyBoatTacketRank'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }
  
 
  async cyrs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliLiveDailyBoatNumberRank'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }
  

  async sprb (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/BiliRanking/BiliVideoHot'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }

}