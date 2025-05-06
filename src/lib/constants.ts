import type { ThemeVars } from "./types/index.js"

export const CSS_VAR_PREFIX = "--sc"
export const THEME_STORAGE = "theme"
export const THEME_ATTR = "data-theme"
export const TOAST_DEFAULT_DURATION = 3000
export const THEME_CONTEXT = "theme-ctx"

export const themeDefault: ThemeVars = {
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
	},
	spacing: {
		spaceXxs: "0.25rem",
		spaceXs: "0.5rem",
		spaceSm: "0.75rem",
		spaceMd: "1rem",
		spaceLg: "1.5rem"
	},
	fontSizes: {
		sizeSm: "0.875rem",
		sizeMd: "1rem",
		sizeLg: "1.125rem"
	},
	shadows: {
		shadowMd: "0 4px 6px rgba(0, 0, 0, 0.1)",
		shadowLg: "0 10px 15px rgba(0, 0, 0, 0.15)"
	}
}
