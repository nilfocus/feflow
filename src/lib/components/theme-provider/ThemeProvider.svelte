<script lang="ts">
	import { type Snippet } from "svelte"
	import { themeDefault, THEME_STORAGE, THEME_ATTR } from "../../constants.js"
	import { setThemeConfigContext } from "../../contexts/index.js"
	import type { ThemeConfigType } from "../../types/index.js"
	import { mergeObjectUtil, themeConfigUtil } from "../../utils/index.js"

	interface Props {
		customTheme?: ThemeConfigType
		children: Snippet
	}

	let { customTheme, children }: Props = $props()

	const theme = mergeObjectUtil(themeDefault, customTheme || {})
	setThemeConfigContext(theme)
	const { themeConfigToCssString } = themeConfigUtil()
	const style = themeConfigToCssString(theme)
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

	{@html style}
</svelte:head>

{@render children?.()}
