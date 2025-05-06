<script lang="ts">
	import { themeCssUtil } from "../../utils/index.js"
	import type { ThemeVars } from "../../types/index.js"
	import { type Snippet } from "svelte"
	import { themeDefault, THEME_STORAGE, THEME_ATTR } from "../../constants.js"

	interface Props {
		customTheme?: ThemeVars
		children: Snippet
	}

	let { customTheme, children }: Props = $props()

	const { themeVarsToCssString } = themeCssUtil()

	function _deepMerge(target: any, source: any): any {
		for (const key in source) {
			if (
				source[key] &&
				typeof source[key] === "object" &&
				!Array.isArray(source[key])
			) {
				target[key] = _deepMerge(target[key] || {}, source[key])
			} else {
				target[key] = source[key]
			}
		}
		return target
	}

	const theme = _deepMerge(themeDefault, customTheme || {})
</script>

<svelte:head>
	{@html `
	<script>
		(function () {
			const theme = localStorage.getItem("${THEME_STORAGE}") || "light";
			document.documentElement.setAttribute("${THEME_ATTR}", theme);
			document.documentElement.style.colorScheme = theme;
		})()
	</script>
	`}

	{@html themeVarsToCssString(theme)}
</svelte:head>

{@render children?.()}
