import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'

export class mt extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi随机美图',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^图库随机$',
          /** 执行方法 */
          fnc: 'tksj'
        },
        {
          /** 命令正则匹配 */
          reg: '^图库总数$',
          /** 执行方法 */
          fnc: 'tkzs'
        },
        {
          /** 命令正则匹配 */
          reg: '^图库更新$',
          /** 执行方法 */
          fnc: 'tkgx'
        }
      ]
    })
  }

  async tksj (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/Meyu/MeyuPicturesRedom'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async tkzs (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)

    let url = 'http://127.0.0.1:5187/api/Meyu/MeyuPicturesCount'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
  }


  async tkgx (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    

        let url = `http://127.0.0.1:5187/api/Meyu/MeyuPicturesUpdate?apikey=Ayu`
        /** 调用接口获取数据 */
       let res = await fetch(url).catch((err) => logger.error(err))
    
       /** 判断接口是否请求成功 */
       if (!res) {
         logger.error('[图库更新] 请求失败')
         return await this.reply('图库更新请求失败')
       }
       
       res = await res.text()
       /** 输入日志 */
       logger.info(`[接口结果] 更新结果：${res}`)
   
       /** 最后回复消息 */
       await this.reply(`${res}`)
    }
  
  

}