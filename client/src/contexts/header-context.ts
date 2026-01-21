import { createContext } from "react"

export type HeaderConfig = {
	buttonType: "none" | "login" | "logout" | "back"
}

export const LayoutContext = createContext<{
	setHeader: (config: HeaderConfig) => void
} | null>(null)
