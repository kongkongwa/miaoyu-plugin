import { execSync } from 'child_process';
import { update } from '../../other/update.js'; 
const Plugin_Name = 'miaoyu-plugin';

export class miaoyu_update extends plugin {
	constructor () {
		super({
			name: 'Miaoyu插件更新',
			dsc: '调用Yunzai自带更新模块进行插件更新',
			event: 'message',
			priority: 2000,
			rule: [
				{
					reg: '^#?(miaoyu|喵宇)(插件)?(强制)?更新$',
					fnc: 'update_plugin',
					permission: 'master'
				}
			]
		});
	}
	async update_plugin(){
		let Update_Plugin = new update();
		Update_Plugin.e = this.e;
		Update_Plugin.reply = this.reply;
		if(Update_Plugin.getPlugin(Plugin_Name)){
			if(this.e.msg.includes('强制')){
				execSync('git reset --hard', { cwd: `${process.cwd()}/plugins/${Plugin_Name}/` });
			}
			await Update_Plugin.runUpdate(Plugin_Name);
			if(Update_Plugin.isUp){
				setTimeout(() => Update_Plugin.restart(), 2000)
			}
		}
		return true;
		
	}
}