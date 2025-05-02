<script lang="ts">
	import { themeUtil } from "../../utils/index.js"
	import type { ThemeVars } from "../../types/index.js"
	import { onMount, type Snippet } from "svelte"

	interface Props {
		theme?: ThemeVars
		children: Snippet
	}

	let { theme, children }: Props = $props()

	const { setThemeVariables, THEME_ATTR, THEME_STORAGE } = themeUtil()

	onMount(() => {
		if (theme) {
			setThemeVariables(theme)
		}
	})
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
</svelte:head>

{@render children?.()}
