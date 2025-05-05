import type { ThemeType, ThemeVars } from "../types/index.js"

export default function themeUtil() {
	const THEME_STORAGE = "theme"
	const THEME_ATTR = "data-theme"

	function _toCssVar(key: string) {
		return `--sc-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
	}

	function themeVarsToCssString(theme?: ThemeVars): string {
		if (!theme) return ""

		let result = ""

		const selectors: Record<ThemeType, string> = {
			light: ":root, .light, [data-theme='light']",
			dark: "[data-theme='dark'], .dark"
		}

		for (const [themeKey, vars] of Object.entries(theme.colors || {})) {
			const cssVars: string[] = []

			for (const [key, value] of Object.entries(vars)) {
				cssVars.push(`${_toCssVar(key)}: ${value} !important;`)
			}

			const selector = selectors[themeKey as ThemeType]
			result += `<style>${selector} {\n${cssVars.join("\n")}\n}</style>\n`
		}

		return result
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
