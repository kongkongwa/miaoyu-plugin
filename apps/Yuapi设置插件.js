import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'


export class set extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'Yuapi设置插件',
      /** 功能描述 */
      dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^B站登录$',
          /** 执行方法 */
          fnc: 'bzdl'
        },
        {
          /** 命令正则匹配 */
          reg: '^刷新B站登录状态$',
          /** 执行方法 */
          fnc: 'dl'
        },
        {
          /** 命令正则匹配 */
          reg: '^添加入库(.*)$',
          /** 执行方法 */
          fnc: 'tjrk'
        },
        {
          /** 命令正则匹配 */
          reg: '^取消入库(.*)$',
          /** 执行方法 */
          fnc: 'qxrk'
        },
        {
          /** 命令正则匹配 */
        reg: '^网易云登录$',
          /** 执行方法 */
        fnc: 'wydl'
        },
        {
          /** 命令正则匹配 */
          reg: '^抖音入库(.*)$',
          /** 执行方法 */
          fnc: 'dytjrk'
        },
        {
          /** 命令正则匹配 */
          reg: '^抖音删除入库(.*)$',
          /** 执行方法 */
          fnc: 'dydel'
        },
        {
          /** 命令正则匹配 */
          reg: '^YUAPI设置帮助$',
          /** 执行方法 */
          fnc: 'st'
        }
      ]
    })
  }

  async bzdl (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    if (!e.isMaster) {
      e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
      return false
    }

    let url = 'http://127.0.0.1:5187/api/BiliOther/BiliQRCodeLogin?apikey=Ayu'
    /** 调用接口获取数据 */

    /** 最后回复消息 */
    await e.reply(segment.image(url))
    return true


   }

  async dl  (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    if (!e.isMaster) {
      e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
      return false
    }
    

        let url = `http://127.0.0.1:5187/api/BiliOther/BiliRefeshCookies?apikey=Ayu`
        /** 调用接口获取数据 */
       let res = await fetch(url).catch((err) => logger.error(err))
    
       /** 判断接口是否请求成功 */
       if (!res) {
         logger.error('[cookie] 请求失败')
         return await this.reply('cookie刷新请求失败')
       }
       
       res = await res.text()
       /** 输入日志 */
       logger.info(`[接口结果] 更新结果：${res}`)
   
       /** 最后回复消息 */
       await this.reply(`${res}`)
       return true
    }

    async tjrk (e) {
      /** e.msg 用户的命令消息 */
      logger.info('[用户命令]', e.msg)
      let msg = e.msg.replace("添加入库","").trim()
      if (!e.isMaster) {
        e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
        return false
      }
      msg = msg.split(" ")
      if(msg['length']==1){
  
          let url = `http://127.0.0.1:5187/api/BiliLive/AddTolisteningList?sign=${msg[0]}`
           /** 最后回复消息 */
          await e.reply(segment.image(url))
          return true
       }
      }

      async dytjrk (e) {
        /** e.msg 用户的命令消息 */
        logger.info('[用户命令]', e.msg)
        let msg = e.msg.replace("抖音入库","").trim()
        if (!e.isMaster) {
          e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
          return false
        }
        msg = msg.split(" ")
        if(msg['length']==1){
    
            let url = `http://127.0.0.1:5187/api/Douyin/AddTolisteningList?data=${msg[0]}`
             /** 最后回复消息 */
            await e.reply(segment.image(url))
            return true
         }
        }

        async dydel (e) {
          /** e.msg 用户的命令消息 */
          logger.info('[用户命令]', e.msg)
          let msg = e.msg.replace("抖音删除入库","").trim()
          if (!e.isMaster) {
            e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
            return false
          }
          msg = msg.split(" ")
          if(msg['length']==1){
      
              let url = `http://127.0.0.1:5187/api/Douyin/RemoveFormlisteningList?data=${msg[0]}`
               /** 最后回复消息 */
              await e.reply(segment.image(url))
              return true
           }
          }
     
  
   


    async qxrk (e) {
      /** e.msg 用户的命令消息 */
      logger.info('[用户命令]', e.msg)
      let msg = e.msg.replace("取消入库","").trim()
      if (!e.isMaster) {
        e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
        return false
      }
      msg = msg.split(" ")
      if(msg['length']==1){
  
          let url = `http://127.0.0.1:5187/api/BiliLive/RemoveFormlisteningList?sign=${msg[0]}`
          await e.reply(segment.image(url))
          return true
       }
      }

    async wydl (e) {
      /** e.msg 用户的命令消息 */
      logger.info('[用户命令]', e.msg)
      if (!e.isMaster) {
        e.reply(`该用户权限不足！该指令仅主人可用咩QAQ~`)
        return false
      }
    
       let url = 'http://127.0.0.1:5187/api/CloudMusic/CloudQRCodeLogin?apikey=Ayu'
      /** 调用接口获取数据 */
    
      /** 最后回复消息 */
        await e.reply(segment.image(url))
        return true
    }

      
    async st(e){
      /** e.msg 用户的命令消息 */
      logger.info('[用户命令]', e.msg)
      await e.reply(`YUAPI设置指令\n1.B站登录\n2.刷新B站登录状态\n3.图库更新\n4.添加入库\n5.取消入库\n6.抖音入库\n7.抖音删除入库\n8.网易云登录\n9.miaoyu更新`)//回复消息，可以可以自己修改，别把``这两个字符删掉就行，\n是换行（也可以直接注释掉这一行，不作回复）

    }
}