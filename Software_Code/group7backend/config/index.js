"use strict";

const env = require("../env")

module.exports = {
	mysql: {
		connectionLimit: 10,
		host: "group7server.mysql.database.azure.com",
		user: "Group7Admin@group7server",
		password: env.DB_PASS,
		database: "group_7",
		port: '3306'
	}
};
