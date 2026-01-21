import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries

	await knex("users").del()
	await knex("tags").del()
	await knex("articles").del()
}
