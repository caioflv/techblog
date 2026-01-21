const BASE_URL = "http://localhost:3333/api"
const SESSIONS_PATH = "sessions"
const USERS_PATH = "users"
const FEED_PATH = "feed"
const ARTICLE_PATH = "article"
const TAGS_PATH = "tags"

let TOKEN = ""

function setToken(t: string) {
	TOKEN = t
}

export {
	setToken,
	TOKEN,
	BASE_URL,
	SESSIONS_PATH,
	USERS_PATH,
	FEED_PATH,
	ARTICLE_PATH,
	TAGS_PATH,
}
