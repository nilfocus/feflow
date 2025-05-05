export type ThemeType = "dark" | "light"

type ColorsType = {
	colorPrimary: string
	colorOnPrimary: string
	colorText: string
	colorTextMuted: string
	colorBg: string
	colorOnBg: string
	colorSurface: string
	colorOnSurface: string
}

export type ThemeVars = {
	colors?: {
		light?: Partial<ColorsType>
		dark?: Partial<ColorsType>
	}
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
