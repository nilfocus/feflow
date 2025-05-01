const THEME_STORAGE = "theme"
const THEME_ATTR = "data-theme"

export default function colorModeUtil() {
	function getCurrentTheme() {
		return (
			localStorage.getItem(THEME_STORAGE) ||
			document.documentElement.getAttribute(THEME_ATTR) ||
			"light"
		)
	}

	function applyTheme(theme: string) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
		localStorage.setItem(THEME_STORAGE, theme)
	}

	function toggleColorMode() {
		const currentTheme = getCurrentTheme()
		applyTheme(currentTheme === "light" ? "dark" : "light")
	}

	return { getCurrentTheme, toggleColorMode }
}
