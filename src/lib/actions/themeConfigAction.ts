import { cssVariableNames, defaultSelectors } from "../constants.js"
import type { ThemeConfigType, ThemeModeType } from "../types/theme.types.js"

export default function themeConfigAction(
	_node: HTMLElement,
	options?: {
		callback?: (data: ThemeConfigType) => void
	}
) {
	const prefix = "feflow"

	function _toCamelCase(name: string) {
		return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
	}

	function getActiveTheme(
		themeMode: ThemeModeType,
		result: (k: string, v?: string) => void
	) {
		defaultSelectors[themeMode].forEach((element) => {
			const el = document.querySelector(element)
			if (el) {
				const styles = getComputedStyle(el)
				cssVariableNames.forEach((cssVar) => {
					const newCssVar = `--${prefix}-${cssVar}`
					const key = _toCamelCase(cssVar)
					const cssValue = styles.getPropertyValue(newCssVar)
					result(key, cssValue)
				})
			}
		})
	}

	const handleCallback = () => {
		const result: ThemeConfigType = {
			colors: {
				light: {},
				dark: {}
			}
		}

		Object.keys(defaultSelectors).forEach((themeMode) => {
			const _themeMode = themeMode as ThemeModeType

			getActiveTheme(_themeMode, (k, v) => {
				if (v) {
					const themeColors = result.colors?.[_themeMode] as Record<
						string,
						string
					>
					themeColors[k] = v
				}
			})
		})

		options?.callback?.(result)
		return result
	}

	handleCallback()

	return {
		destroy() {},
		update(newOptions: typeof options) {
			options = newOptions
			handleCallback()
		}
	}
}
