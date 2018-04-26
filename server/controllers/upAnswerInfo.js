const fs = require('fs')
const path = require('path')
const { mysql: config } = require('../config')

module.exports = async ctx => {
	const { mysql } = require ('../qcloud')
	const DB = require('knex')({
		client: 'mysql',
		connection: {
			host: config.host,
			port: config.port,
			user: config.user,
			password: config.pass,
			database: config.db,
			charset: config.char,
			multipleStatements: true
		}
	})

	var query;
	if (ctx.method === 'GET') {
		query = ctx.query
	}
	if (ctx.method === 'POST') {
		query = ctx.request.body
	}

	var name_table = "QuestionAnswer" + query.id.toString()
	//var name_table = query.name

	await DB.schema.hasTable(name_table).then(function (exists) {
		if (!exists) {
			return DB.schema.createTable(name_table, function (table) {
				table.increments('id');
				table.string('name', 30).notNullable();
				table.string('studentNum', 30).notNullable();
				table.string('library', 30).notNullable();
				table.string('status', 30).notNullable();
				table.string('classes', 512);
				table.boolean('isClass').notNullable();
				table.string('openId', 100).notNullable();
				table.string('answer', 2048);
			});/*.then(res => {
				process.exit()
				//ctx.state.data = {query,name_table}
			})*/
		}
	});
	await DB.schema.hasColumn('Address_List','openId').then(function(exists){
		if(!exists){
			return DB.schema.table('Address_List',function(table){
				table.string('openId',512);
			});
		}
	});
	await DB.schema.hasColumn('Address_List', 'grade').then(function (exists) {
		if (!exists) {
			return DB.schema.table('Address_List', function (table) {
				table.string('grade', 10);
			});
		}
	});
//do a judge by isClass, for "answer"
	let res = await mysql('Address_List').where({name: query.name, studentNum: query.studentNum}).update({openId: query.openId, grade: query.status})//pay attention
	if (res != 0){
		await mysql(name_table).where({name: query.name, studentNum: query.studentNum}).del()
		await mysql(name_table).insert({ name: query.name, studentNum: query.studentNum, library: query.library, status: query.status, classes: query.classes, isClass: query.isClass, openId: query.openId, answer: query.answer})
	}
	ctx.state.data = res
}