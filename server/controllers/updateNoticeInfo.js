//update notice
module.exports = async ctx  => {
//	if (ctx.state.$wxInfo.loginState === 1) {
		const { mysql } = require('../qcloud')
		if (ctx.method === 'GET'){
			const query = ctx.query
			let res = await mysql('Notice_Info').where({ id: query.id }).update({ title: query.title, detail: query.detail })
			ctx.state.data = query
		}
		if (ctx.method === 'POST') {
			const query = ctx.request.body
			let res = await mysql('Notice_Info').where({ id: query.id }).update({ title: query.title, detail: query.detail })
			ctx.state.data = query
		}

		
//	} else {
//		ctx.state.code = -1
//	}
}