import { CSS_VAR_PREFIX, defaultSelectors } from "../constants.js"
import { getThemeConfigContext } from "../contexts/index.js"
import { themeModeState } from "../states/index.js"
import type { ThemeModeType, ThemeConfigType } from "../types/index.js"

export function themeConfigUtil() {
	function _toCssVar(key: string) {
		return `${CSS_VAR_PREFIX}-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
	}

	function _generateCssVariables(key: string, value: string) {
		return `${_toCssVar(key)}: ${value} !important;`
	}

	function _processThemeSection(
		vars: Record<string, any>,
		selectors: string[]
	) {
		const cssVars: string[] = []

		for (const [key, value] of Object.entries(vars)) {
			cssVars.push(_generateCssVariables(key, value))
		}

		return `<style>${selectors.join(", ")} {\n${cssVars.join("\n")}\n}</style>\n`
	}

	function themeConfigToCssString(theme?: ThemeConfigType) {
		if (!theme) return ""

		let result = ""

		if (theme.colors) {
			for (const [themeKey, vars] of Object.entries(theme.colors)) {
				result += _processThemeSection(
					vars,
					defaultSelectors[themeKey as ThemeModeType]
				)
			}
		}

		return result
	}

	return { themeConfigToCssString }
}

export function getThemeConfig() {
	const { colors } = getThemeConfigContext()
	const _themeState = themeModeState()
	return colors[_themeState.data.mode]
}
