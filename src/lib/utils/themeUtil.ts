import type { ThemeVars } from "../types/index.js"

export default function themeUtil() {
	const THEME_STORAGE = "theme"
	const THEME_ATTR = "data-theme"

	function toCssVar(key: string) {
		return `--sc-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
	}

	function applyVarsToCss(vars: Record<string, string>) {
		Object.entries(vars).forEach(function ([key, value]) {
			document.documentElement.style.setProperty(
				toCssVar(key),
				value,
				"important"
			)
		})
	}

	function setThemeVariables(theme: ThemeVars) {
		Object.values(theme).forEach(function (vars) {
			if (typeof vars === "object") {
				applyVarsToCss(vars)
			}
		})
	}

	function getCurrentTheme() {
		return document.documentElement.getAttribute(THEME_ATTR) || "light"
	}

	function applyTheme(theme: string) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
	}

	function toggleColorMode() {
		const current = getCurrentTheme()
		const next = current === "light" ? "dark" : "light"
		applyTheme(next)
		localStorage.setItem(THEME_STORAGE, next)
	}

	function initThemeFromStorage() {
		const saved = localStorage.getItem(THEME_STORAGE)
		if (saved) applyTheme(saved)
	}

	return {
		setThemeVariables,
		toggleColorMode,
		initThemeFromStorage,
		THEME_STORAGE,
		THEME_ATTR
	}
}
