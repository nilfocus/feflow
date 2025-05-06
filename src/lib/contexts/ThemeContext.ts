import { getContext, setContext } from "svelte"
import type { ThemeVars } from "../types/theme.types.js"
import { THEME_CONTEXT } from "../constants.js"

export function setThemeContext(t: ThemeVars) {
	setContext(THEME_CONTEXT, t)
}

export function getThemeContext() {
	return getContext(THEME_CONTEXT) as ThemeVars
}
