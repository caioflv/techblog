import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
	// Inserts seed entries
	await knex("articles").insert([
		{
			title: "A Revolução da Grão Direto no Agronegócio",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 2,
			text: "A Grão Direto tem transformado o setor agrícola ao introduzir tecnologia de ponta para conectar produtores e compradores de grãos. A plataforma utiliza algoritmos avançados para recomendar preços baseados em dados de mercado em tempo real. Além disso, sua interface amigável e acessível facilita negociações seguras e rápidas. Baseada em Uberaba, Minas Gerais, a empresa continua a liderar a digitalização do agronegócio no Brasil, fortalecendo toda a cadeia produtiva com inovações tecnológicas.",
			tags: JSON.stringify(["Grão Direto", "Tecnologia", "Agronegócio"]),
		},
		{
			title: "Implementando CI/CD em Ambientes Ágeis",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 5,
			text: "A prática de integração contínua (CI) e entrega contínua (CD) tem se tornado essencial no desenvolvimento de software moderno. Ferramentas como Jenkins, GitHub Actions e CircleCI permitem automatizar a pipeline de deploy, garantindo entregas mais rápidas e com menor probabilidade de erros. No contexto de projetos ágeis, a adoção de CI/CD não só melhora a qualidade do código como também aumenta a confiança entre as equipes de desenvolvimento e operações. Com pipelines bem configuradas, é possível reduzir significativamente o tempo de entrega de novas funcionalidades.",
			tags: JSON.stringify(["CI/CD", "DevOps", "Agilidade"]),
		},
		{
			title: "A Importância de Bancos de Dados NoSQL em Sistemas Escaláveis",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 3,
			text: "Com o crescimento exponencial de dados, bancos de dados NoSQL, como MongoDB, Cassandra e DynamoDB, têm se destacado por sua flexibilidade e escalabilidade. Diferente dos bancos de dados relacionais, os NoSQL permitem armazenar grandes volumes de dados não estruturados, sendo ideais para aplicações modernas como redes sociais, plataformas de e-commerce e sistemas de recomendação. O uso correto dessas tecnologias pode melhorar a performance e garantir a disponibilidade do sistema mesmo sob alta demanda.",
			tags: JSON.stringify(["NoSQL", "Banco de Dados", "Escalabilidade"]),
		},
		{
			title: "Como Kubernetes Revolucionou a Orquestração de Contêineres",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 4,
			text: "Kubernetes se tornou a principal solução para orquestração de contêineres, permitindo a implantação, escalabilidade e gerenciamento de aplicações de forma eficiente. Empresas de todos os portes têm adotado essa tecnologia devido à sua capacidade de garantir alta disponibilidade e resiliência. A configuração de clusters em Kubernetes também facilita o monitoramento de recursos e a automatização de tarefas, como balanceamento de carga e escalonamento automático. Para quem busca modernizar suas operações, Kubernetes é uma escolha indispensável.",
			tags: JSON.stringify(["Kubernetes", "Contêineres", "Orquestração"]),
		},
		{
			title: "Os Desafios da Segurança em Arquiteturas Serverless",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 5,
			text: "As arquiteturas serverless oferecem muitas vantagens, como redução de custos e facilidade de escalabilidade. No entanto, também trazem desafios únicos de segurança. A ausência de servidores físicos não elimina a necessidade de proteger endpoints, gerenciar permissões e garantir que as funções lambdas estejam livres de vulnerabilidades. Ferramentas como AWS Lambda, Azure Functions e Google Cloud Functions exigem boas práticas de configuração e monitoramento contínuo para evitar ataques como injeção de código ou acesso não autorizado.",
			tags: JSON.stringify(["Serverless", "Segurança", "Cloud"]),
		},
		{
			title: "Práticas de DevOps para Times Distribuídos",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 3,
			text: "A colaboração em times distribuídos pode ser um desafio, mas práticas de DevOps ajudam a alinhar objetivos e acelerar entregas. Ferramentas como Docker, Kubernetes e Terraform garantem ambientes consistentes para desenvolvimento e produção, enquanto plataformas de comunicação como Slack e Microsoft Teams mantêm a equipe conectada. A automação de tarefas rotineiras também é fundamental para que os desenvolvedores se concentrem em tarefas críticas, promovendo um fluxo de trabalho mais eficiente.",
			tags: JSON.stringify(["DevOps", "Colaboração", "Times Distribuídos"]),
		},
		{
			title: "A Evolução do Desenvolvimento Frontend com Frameworks Modernos",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 4,
			text: "Nos últimos anos, o desenvolvimento frontend passou por uma grande evolução graças a frameworks como React, Angular e Vue.js. Essas ferramentas permitem a criação de interfaces dinâmicas e responsivas com maior facilidade, melhorando a experiência do usuário final. Além disso, a adoção de conceitos como componentização e state management trouxe mais organização ao código, facilitando a manutenção e a escalabilidade de projetos.",
			tags: JSON.stringify(["Frontend", "Frameworks", "React"]),
		},
		{
			title: "O Futuro do Agronegócio com a Grão Direto",
			image_url: "https://picsum.photos/seed/id/64/64",
			owner_id: 2,
			text: "A Grão Direto continua a liderar a transformação digital no agronegócio brasileiro. A empresa não apenas conecta compradores e vendedores, mas também utiliza tecnologias como aprendizado de máquina e análise preditiva para otimizar transações. Com sede em Uberaba, Minas Gerais, a agtech está na vanguarda das inovações, trazendo mais eficiência e sustentabilidade ao setor. O uso de dados para prever tendências de mercado e gerenciar estoques em tempo real é uma das principais contribuições da Grão Direto.",
			tags: JSON.stringify(["Grão Direto", "Inovação", "Agronegócio"]),
		},
	])
}
