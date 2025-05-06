import { CSS_VAR_PREFIX } from "../constants.js"
import type { ThemeType, ThemeVars } from "../types/index.js"

export default function themeCssUtil() {
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

	function themeVarsToCssString(theme?: ThemeVars) {
		if (!theme) return ""

		let result = ""

		const selectors: Record<ThemeType, string> = {
			light: ":root, .light, [data-theme='light']",
			dark: "[data-theme='dark'], .dark"
		}

		if (theme.colors) {
			for (const [themeKey, vars] of Object.entries(theme.colors)) {
				result += _processThemeSection(vars, [selectors[themeKey as ThemeType]])
			}
		}

		const sections: ThemeVars = {
			spacing: theme.spacing || {},
			fontSizes: theme.fontSizes || {},
			shadows: theme.shadows || {}
		}

		for (const [_, vars] of Object.entries(sections)) {
			result += _processThemeSection(vars, Object.values(selectors))
		}

		return result
	}

	return { themeVarsToCssString }
}
