import type { ThemeConfigType } from "./types/index.js"

export const APP_NAME = "feflow"

export const CSS_VAR_PREFIX = `--${APP_NAME}`
export const THEME_STORAGE = `${APP_NAME}-theme`
export const THEME_ATTR = "data-theme"
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = `${APP_NAME}-theme-ctx`

export const themeModeSelectors = {
	light: `[${THEME_ATTR}='light']`,
	dark: `[${THEME_ATTR}='dark']`
}

export const themeConfigDefault: ThemeConfigType = {
	colors: {
		light: {
			colorPrimary: "#18181b",
			colorOnPrimary: "#ffffff",
			colorSecondary: "#474747",
			colorOnSecondary: "#ffffff",
			colorText: "#272727",
			colorTextMuted: "#6b7280",
			colorBg: "#ffffff",
			colorOnBg: "#272727",
			colorSurface: "#f5f7fa",
			colorOnSurface: "#272727",
			colorBorder: "#e5e7eb",

			colorSuccess: "#a7eac1",
			colorOnSuccess: "#004422",
			colorError: "#f9b1b1",
			colorOnError: "#661111",
			colorWarning: "#fde6b0",
			colorOnWarning: "#5a3d00",
			colorInfo: "#a7dffc",
			colorOnInfo: "#003344",
			colorInherit: "inherit",
			colorOnInherit: "currentColor",
			colorDisabled: "#d1d5db",
			colorOnDisabled: "#6b7280",
			colorFocus: "rgba(167, 223, 252, 0.5)",
			colorOnFocus: "#003344"
		},
		dark: {
			colorPrimary: "#fafafa",
			colorOnPrimary: "#18181b",
			colorSecondary: "#ddd",
			colorOnSecondary: "#474747",
			colorText: "#f9fafb",
			colorTextMuted: "#78787f",
			colorBg: "#09090b",
			colorOnBg: "#f9fafb",
			colorSurface: "#101013",
			colorOnSurface: "#f9fafb",
			colorBorder: "#27272a",

			colorSuccess: "#004422",
			colorOnSuccess: "#a7eac1",
			colorError: "#661111",
			colorOnError: "#f9b1b1",
			colorWarning: "#5a3d00",
			colorOnWarning: "#fde6b0",
			colorInfo: "#003344",
			colorOnInfo: "#a7dffc",
			colorInherit: "inherit",
			colorOnInherit: "currentColor",
			colorDisabled: "#374151",
			colorOnDisabled: "#9ca3af",
			colorFocus: "rgba(167, 223, 252, 0.7)",
			colorOnFocus: "#a7dffc"
		}
	}
}
