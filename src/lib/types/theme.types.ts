export type ThemeModeType = "dark" | "light"

type ThemeColorsType = {
	colorPrimary: string
	colorOnPrimary: string
	colorSecondary: string
	colorOnSecondary: string
	colorText: string
	colorTextMuted: string
	colorBg: string
	colorOnBg: string
	colorSurface: string
	colorOnSurface: string
	colorBorder: string
}

export type ThemeConfigType = {
	colors?: {
		light?: Partial<ThemeColorsType>
		dark?: Partial<ThemeColorsType>
	}
	spacing?: Partial<{
		spaceXxs: string
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
