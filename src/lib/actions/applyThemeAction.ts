import colorModeUtil from "../utils/colorModeUtil.js"

export default function applyThemeAction(_node: HTMLElement) {
	const { initThemeFromStorage } = colorModeUtil()

	initThemeFromStorage()

	return {
		destroy() {}
	}
}
