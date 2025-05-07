import { THEME_ATTR, THEME_STORAGE } from "../constants.js"
import type { ThemeModeType } from "../types/theme.types.js"

export default function themeModeUtil() {
	function themeMode() {
		return (
			(document.documentElement.getAttribute(
				THEME_ATTR
			) as ThemeModeType | null) || "light"
		)
	}

	function _applyThemeMode(theme: ThemeModeType) {
		document.documentElement.style.colorScheme = theme
		document.documentElement.setAttribute(THEME_ATTR, theme)
		localStorage.setItem(THEME_STORAGE, theme)
	}

	function toggleThemeMode(onChange?: ((t: ThemeModeType) => void) | Event) {
		const currentThemeMode = themeMode()
		const nextThemeMode = currentThemeMode === "light" ? "dark" : "light"
		_applyThemeMode(nextThemeMode)

		if (onChange && typeof onChange === "function") {
			onChange?.(nextThemeMode)
		}
	}

	return {
		themeMode,
		toggleThemeMode
	}
}
