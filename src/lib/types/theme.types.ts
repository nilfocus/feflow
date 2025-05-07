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
}

export type ThemeConfigContextType = {
	colors: {
		light: ThemeColorsType
		dark: ThemeColorsType
	}
}
