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

type ThemeSpacingType = {
	spaceXxs: string
	spaceXs: string
	spaceSm: string
	spaceMd: string
	spaceLg: string
}

type ThemeFontSizesType = {
	sizeSm: string
	sizeMd: string
	sizeLg: string
}

type ThemeShadowsType = {
	shadowMd: string
	shadowLg: string
}

export type ThemeConfigType = {
	colors?: {
		light?: Partial<ThemeColorsType>
		dark?: Partial<ThemeColorsType>
	}
	spacing?: Partial<ThemeSpacingType>
	fontSizes?: Partial<ThemeFontSizesType>
	shadows?: Partial<ThemeShadowsType>
}

export type ThemeConfigContextType = {
	colors: {
		light: ThemeColorsType
		dark: ThemeColorsType
	}
	spacing: ThemeSpacingType
	fontSizes: ThemeFontSizesType
	shadows: ThemeShadowsType
}
