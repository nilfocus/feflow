import type { ThemeVars } from "../types/index.js"

export default function themeUtil() {
	const THEME_STORAGE = "theme"
	const THEME_ATTR = "data-theme"

	function _toCssVar(key: string) {
		return `--sc-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
	}

	function themeVarsToCssString(theme?: ThemeVars): string {
		if (!theme) return ""

		let cssVars: string[] = []

		for (const group of Object.values(theme)) {
			if (typeof group === "object" && group !== null) {
				for (const [key, value] of Object.entries(group)) {
					cssVars.push(`${_toCssVar(key)}: ${value} !important;`)
				}
			}
		}

		return `<style>:root {\n${cssVars.join("\n")}\n}</style>`
	}

	function getCurrentTheme() {
		return document.documentElement.getAttribute(THEME_ATTR) || "light"
	}

	function _applyTheme(theme: string) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
	}

	function toggleColorMode() {
		const currentTheme = getCurrentTheme()
		const next = currentTheme === "light" ? "dark" : "light"
		_applyTheme(next)
		localStorage.setItem(THEME_STORAGE, next)
	}

	return {
		toggleColorMode,
		THEME_STORAGE,
		THEME_ATTR,
		themeVarsToCssString
	}
}
