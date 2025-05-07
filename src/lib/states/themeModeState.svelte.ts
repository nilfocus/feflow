import type { ThemeModeType } from "../types/index.js"

const data = $state<{ mode: ThemeModeType }>({
	mode: "light"
})

export default function themeModeState() {
	return {
		data,
		setThemeMode(t: ThemeModeType) {
			this.data.mode = t
		}
	}
}
