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

	const { themeConfigToCssString } = themeConfigUtil()

	const theme = mergeObjectUtil(themeDefault, customTheme || {})

	setThemeConfigContext(theme)
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

	{@html themeConfigToCssString(theme)}
</svelte:head>

{@render children?.()}
