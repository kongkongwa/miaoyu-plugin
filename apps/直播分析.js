import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'

export class bg extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi直播报告',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
       
        {
          /** 命令正则匹配 */
          reg: '^直播分析(.*)$',
          /** 执行方法 */
          fnc: 'zbfx'
        }
        
      ]
    })
  }


  


  async zbfx (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("直播分析","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/BiliLive/GetUserAI?sign=${msg[0]}&appid=175a026d&apisecret=OGU1NDQ3MTNmYzJiNDU4Nzk2ZmJlNzYz&apikey=89c7bc36e85b60c4183c516bae3fa6ac`
        /** 调用接口获取数据 */
       let res = await fetch(url).catch((err) => logger.error(err))
    
       /** 判断接口是否请求成功 */
       if (!res) {
         logger.error('[分析] 请求失败')
         return await this.reply('分析请求失败')
       }
       
       res = await res.text()
       /** 输入日志 */
       logger.info(`[接口结果] 分析结果：${res}`)
   
       /** 最后回复消息 */
       await this.reply(`${res}`)
    }
  }

  
}