import knexLib from "knex"
import stringcase from "knex-stringcase"
const config = require("../../knexfile.js")

type Environment = "development" | "test" | "production"

const environment: Environment =
	process.env.NODE_ENV === "production" ? "production" : "development"

export const knex = knexLib({
	...config[environment],
	...stringcase(),
})
