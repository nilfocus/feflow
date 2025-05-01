const THEME_STORAGE = "theme"
const THEME_ATTR = "data-theme"

export default function colorModeUtil() {
	function getThemeFromStorage() {
		return localStorage.getItem(THEME_STORAGE)
	}

	function getCurrentTheme() {
		return document.documentElement.getAttribute(THEME_ATTR) || "light"
	}

	function applyTheme(theme: string) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
	}

	function toggleColorMode() {
		const currentTheme = getCurrentTheme()
		const theme = currentTheme === "light" ? "dark" : "light"
		applyTheme(theme)
		localStorage.setItem(THEME_STORAGE, theme)
	}

	function initThemeFromStorage() {
		const saved = getThemeFromStorage()
		if (saved) applyTheme(saved)
	}

	return { initThemeFromStorage, toggleColorMode }
}
