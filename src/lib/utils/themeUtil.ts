import { THEME_ATTR, THEME_STORAGE } from "../constants.js"
import type { ThemeType } from "../types/index.js"

export default function themeUtil() {
	function getTheme() {
		return (
			(document.documentElement.getAttribute(THEME_ATTR) as ThemeType | null) ||
			"light"
		)
	}

	function _applyTheme(theme: ThemeType) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
		localStorage.setItem(THEME_STORAGE, theme)
	}

	function toggleTheme(onChange?: (t: ThemeType) => void) {
		const currentTheme = getTheme()
		const next = currentTheme === "light" ? "dark" : "light"
		_applyTheme(next)
		onChange?.(next)
	}

	return {
		getTheme,
		toggleTheme
	}
}
