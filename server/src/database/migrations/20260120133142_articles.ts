import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("articles", (table) => {
		table.increments("id").primary()
		table
			.integer("owner_id")
			.notNullable()
			.references("id")
			.inTable("users")
			.onDelete("CASCADE")

		table.text("title").notNullable().defaultTo("")
		table.text("image_url").notNullable().defaultTo("")
		table.text("text").notNullable().defaultTo("")
		table.json("tags").notNullable().defaultTo(JSON.stringify([]))

		table.timestamp("created_at").defaultTo(knex.fn.now())
		table.timestamp("updated_at").defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("articles")
}
