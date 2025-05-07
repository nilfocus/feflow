import { CSS_VAR_PREFIX } from "../constants.js"
import type { ThemeModeType, ThemeConfigType } from "../types/index.js"

export default function themeConfigUtil() {
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

		const selectors: Record<ThemeModeType, string> = {
			light: ":root, .light, [data-theme='light']",
			dark: "[data-theme='dark'], .dark"
		}

		if (theme.colors) {
			for (const [themeKey, vars] of Object.entries(theme.colors)) {
				result += _processThemeSection(vars, [
					selectors[themeKey as ThemeModeType]
				])
			}
		}

		const sections: ThemeConfigType = {
			spacing: theme.spacing || {},
			fontSizes: theme.fontSizes || {},
			shadows: theme.shadows || {}
		}

		for (const [_, vars] of Object.entries(sections)) {
			result += _processThemeSection(vars, Object.values(selectors))
		}

		return result
	}

	return { themeConfigToCssString }
}
