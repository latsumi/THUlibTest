module.exports = async ctx => {
	//	if (ctx.state.$wxInfo.loginState === 1) {
	const { mysql } = require('../qcloud')
	if (ctx.method === 'GET') {
		const query = ctx.query
		let res = await mysql('Address_List').where({ library: query.library }).select('name', 'studentNum')
		ctx.state.data = res
	}
	if (ctx.method === 'POST') {
		const query = ctx.request.body
		let res = await mysql('Address_List').where({ library: query.library }).select('name', 'studentNum')
		ctx.state.data = res
	}
	//	} else {
	//		ctx.state.code = -1
	//	}
}
