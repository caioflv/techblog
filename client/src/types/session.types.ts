import type { User } from "./user.types"

export type SessionResult = null | { user: User; token: string }
