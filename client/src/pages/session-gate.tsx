import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/use-auth"

export function SessionGate() {
	const { status } = useAuth()

	if (status === "checking") {
		return null
	}

	if (status === "unauthenticated") {
		return null
	}

	return <Outlet />
}
