import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
	// Inserts seed entries
	await knex("tags").insert([
		{ name: "Grão Direto" },
		{ name: "Tecnologia" },
		{ name: "Agronegócio" },
		{ name: "CI/CD" },
		{ name: "DevOps" },
		{ name: "Agilidade" },
		{ name: "NoSQL" },
		{ name: "Banco de Dados" },
		{ name: "Escalabilidade" },
		{ name: "Kubernetes" },
		{ name: "Contêineres" },
		{ name: "Orquestração" },
		{ name: "Serverless" },
		{ name: "Segurança" },
		{ name: "Cloud" },
		{ name: "Colaboração" },
		{ name: "Times distribuídos" },
		{ name: "Frontend" },
		{ name: "Frameworks" },
		{ name: "React" },
		{ name: "Inovação" },
	])
}
