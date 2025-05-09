import type { ThemeConfigType } from "./types/index.js"

export const THEME_STORAGE = "theme"
export const THEME_ATTR = "data-theme"
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = "theme-ctx"

export const CSS_VAR_PREFIX = "--feflow"

export const defaultSelectors = {
	light: ["[data-theme='light']"],
	dark: ["[data-theme='dark']"]
}

export const cssVariableNames = [
	"color-primary",
	"color-on-primary",
	"color-secondary",
	"color-on-secondary",
	"color-text",
	"color-text-muted",
	"color-bg",
	"color-on-bg",
	"color-surface",
	"color-on-surface",
	"color-border"
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
