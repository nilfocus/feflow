<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import {
		themeConfigDefault,
		THEME_STORAGE,
		THEME_ATTR
	} from "../../constants.js"
	import { setThemeConfigContext } from "../../contexts/index.js"
	import type { ThemeConfigType } from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "../../utils/index.js"
	import "./ThemeProvider.css"
	import { themeModeState } from "../../states/index.js"

	interface Props {
		customTheme?: ThemeConfigType
		children: Snippet
	}

	let { customTheme, children }: Props = $props()

	const theme = mergeObjectUtil(
		themeConfigDefault,
		customTheme || {}
	) as ThemeConfigType

	setThemeConfigContext(theme)

	const { themeConfigToCssString } = themeConfigUtil()
	const style = themeConfigToCssString(theme)

	const { getThemeMode } = themeModeUtil()
	const _themeModeState = themeModeState()

	onMount(() => {
		const themeMode = getThemeMode()
		_themeModeState.setThemeMode(themeMode)
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

	{@html style}
</svelte:head>

{@render children?.()}
