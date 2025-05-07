import { THEME_ATTR, THEME_STORAGE } from "../constants.js"
import themeModeState from "../states/themeModeState.svelte.js"
import type { ThemeModeType } from "../types/theme.types.js"

export default function themeModeUtil() {
	function getThemeMode() {
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
		const currentThemeMode = getThemeMode()
		const _themeState = themeModeState()

		const nextThemeMode = currentThemeMode === "light" ? "dark" : "light"
		_applyThemeMode(nextThemeMode)
		_themeState.setThemeMode(nextThemeMode)

		if (onChange && typeof onChange === "function") {
			onChange?.(nextThemeMode)
		}
	}

	return {
		getThemeMode,
		toggleThemeMode
	}
}
