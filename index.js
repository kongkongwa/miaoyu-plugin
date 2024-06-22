import fs from 'node:fs'

logger.info('--------- >_< ---------')
logger.info('Miaoyu-plugin初始化v1.2')
logger.info('-----------------------')

const files = fs.readdirSync('./plugins/miaoyu-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})


ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
      logger.error(`载入插件错误：${logger.red(name)}`)
      logger.error(ret[i].reason)
      continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}

logger.mark('Miaoyu-plugin加载成功~ by小狐狸空空酱')
logger.mark('欢迎使用Miaoyu-plugin 当前版本号v1.2')
logger.mark('API支持：Yuapi by宇宇')


export { apps }