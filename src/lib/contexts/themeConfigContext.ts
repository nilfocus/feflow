import { getContext, setContext } from "svelte"
import type { ThemeConfigType } from "../types/theme.types.js"
import { THEME_CONTEXT } from "../constants.js"

export function setThemeConfigContext(t: ThemeConfigType) {
	setContext(THEME_CONTEXT, t)
}

export function getThemeConfigContext() {
	return getContext(THEME_CONTEXT) as ThemeConfigType
}
