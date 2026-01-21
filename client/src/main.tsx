import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./global.css"

import { AppRoutes } from "./routes/app-routes.tsx"
import { AuthProvider } from "./contexts/auth-provider.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
)
