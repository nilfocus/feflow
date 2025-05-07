import { getContext, setContext } from "svelte"
import type { ThemeConfigContextType } from "../types/index.js"
import { THEME_CONTEXT } from "../constants.js"

export function setThemeConfigContext(t: ThemeConfigContextType) {
	setContext(THEME_CONTEXT, t)
}

export function getThemeConfigContext() {
	return getContext(THEME_CONTEXT) as ThemeConfigContextType
}
