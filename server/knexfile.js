require("dotenv").config()

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: process.env.DATABASE_FILE,
		},
		migrations: {
			extension: "ts",
			directory: "./src/database/migrations",
		},
		seeds: {
			extension: "ts",
			directory: "./src/database/seeds",
		},
		useNullAsDefault: true,

		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done)
			},
		},
	},
}
