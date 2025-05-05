export type ThemeType = "dark" | "light"

export type ThemeVars = {
	colors?: Partial<{
		colorPrimary: string
		colorOnPrimary: string
		colorText: string
		colorTextMuted: string
		colorBg: string
		colorOnBg: string
		colorSurface: string
		colorOnSurface: string
	}>
	spacing?: Partial<{
		spaceXs: string
		spaceSm: string
		spaceMd: string
		spaceLg: string
	}>
	fontSizes?: Partial<{
		sizeSm: string
		sizeMd: string
		sizeLg: string
	}>
	shadows?: Partial<{
		shadowMd: string
		shadowLg: string
	}>
}
