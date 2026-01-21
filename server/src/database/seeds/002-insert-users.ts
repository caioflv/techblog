import { Knex } from "knex"
import bcrypt from "bcrypt"

export async function seed(knex: Knex): Promise<void> {
	const hashedPassword = await bcrypt.hash("123456", 8)

	// Inserts seed entries
	await knex("users").insert([
		{
			email: "caio@email.com",
			password: hashedPassword,
			nickname: "Caio Ferreira",
		},
		{
			email: "fred@email.com",
			password: hashedPassword,
			nickname: "Fred Marques",
		},
		{
			email: "eduardo@email.com",
			password: hashedPassword,
			nickname: "Eduardo",
		},
		{
			email: "geovana@email.com",
			password: hashedPassword,
			nickname: "Geovana Rocha",
		},
		{
			email: "carlos@email.com",
			password: hashedPassword,
			nickname: "Carlos Henrique",
		},
	])
}
