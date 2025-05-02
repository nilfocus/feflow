<script lang="ts">
	import { themeUtil } from "../../utils/index.js"
	import type { ThemeVars } from "../../types/index.js"
	import { onMount, type Snippet } from "svelte"

	interface Props {
		theme?: ThemeVars
		children: Snippet
	}

	let { theme, children }: Props = $props()

	const { setThemeVariables, getInitThemeScript } = themeUtil()

	onMount(() => {
		if (theme) {
			setThemeVariables(theme)
		}
	})
</script>

<svelte:head>
	{@html `<script>${getInitThemeScript()}</script>`}
</svelte:head>

{@render children?.()}
