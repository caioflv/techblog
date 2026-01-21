import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("users", (table) => {
		table.increments("id").primary()
		table.text("email").notNullable().unique()
		table.text("password").notNullable()
		table.text("nickname").defaultTo("")

		table.timestamp("created_at").defaultTo(knex.fn.now())
		table.timestamp("updated_at").defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("users")
}
