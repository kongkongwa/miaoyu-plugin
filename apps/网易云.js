import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'

export class set extends plugin {
constructor () {
    super({
      /** 功能名称 */
    name: 'YUAPI插件网易云',
      /** 功能描述 */
    dsc: '简单开发示例',
      /** https://oicqjs.github.io/oicq/#events */
    event: 'message',
      /** 优先级，数字越小等级越高 */
    priority: 5000,
    rule: [
        {
          /** 命令正则匹配 */
        reg: '^查用户(.*)$',
          /** 执行方法 */
        fnc: 'cyh'
        },
        {
          /** 命令正则匹配 */
        reg: '^查歌词(.*)$',
          /** 执行方法 */
        fnc: 'cgc'
        },
        {
          /** 命令正则匹配 */
        reg: '^搜歌曲(.*)$',
          /** 执行方法 */
        fnc: 'sgq'
        },
        {
          /** 命令正则匹配 */
        reg: '^下歌曲(.*)$',
          /** 执行方法 */
        fnc: 'xgq'
        }
    ]
    })
}

async cyh  (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查用户","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/CloudMusic/GetUserData?sign=${msg[0]}`
        /** 调用接口获取数据 

       /** 最后回复消息 */
    await e.reply(segment.image(url))
    }
}

    async cgc (e) {
      /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("查歌词","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/CloudMusic/GetSongLyrData?sign=${msg[0]}`
           /** 最后回复消息 */
        await e.reply(segment.image(url))
    }
    }



    async sgq (e) {
      /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("搜歌曲","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){

        let url = `http://127.0.0.1:5187/api/CloudMusic/SearchSongsData?songname=${msg[0]}`
        await e.reply(segment.image(url))
    }
    }

    async xgq (e) {
        /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("下歌曲","").trim()
    msg = msg.split(" ")
    if(msg['length']==1){
        let url = `http://127.0.0.1:5187/api/CloudMusic/GetSongDownData?sign=${msg[0]}`
        await e.reply(segment.image(url))
    }
    }
}