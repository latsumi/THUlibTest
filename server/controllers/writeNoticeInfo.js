//write notice
module.exports = async ctx  => {
//	if (ctx.state.$wxInfo.loginState === 1) {
		const { mysql } = require('../qcloud')
		if (ctx.method === 'GET'){
			const query = ctx.query
			await mysql('Notice_Info').insert({ title: query.title, detail: query.detail })
			ctx.state.data = query
		}
		if (ctx.method === 'POST'){
			const query = ctx.request.body
			await mysql('Notice_Info').insert({ title: query.title, detail: query.detail })
			ctx.state.data = query
		}
//	} else {
//		ctx.state.code = -1
//	}
}
