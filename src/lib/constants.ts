import type { ThemeConfigType } from "./types/index.js"

export const THEME_STORAGE = "theme"
export const THEME_ATTR = "data-theme"
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = "theme-ctx"

export const CSS_VAR_PREFIX = "--feflow"

export const COLOR_VARS_CSS = [
	`${CSS_VAR_PREFIX}-color-primary`,
	`${CSS_VAR_PREFIX}-color-on-primary`,
	`${CSS_VAR_PREFIX}-color-secondary`,
	`${CSS_VAR_PREFIX}-color-on-secondary`,
	`${CSS_VAR_PREFIX}-color-text`,
	`${CSS_VAR_PREFIX}-color-text-muted`,
	`${CSS_VAR_PREFIX}-color-bg`,
	`${CSS_VAR_PREFIX}-color-on-bg`,
	`${CSS_VAR_PREFIX}-color-border`,
	`${CSS_VAR_PREFIX}-color-surface`,
	`${CSS_VAR_PREFIX}-color-on-surface`
]

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
			colorBorder: "#e5e7eb"
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
			colorBorder: "#27272a"
		}
	}
}
