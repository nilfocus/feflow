<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import {
		Button,
		getThemeConfigContext,
		themeModeUtil,
		type ThemeModeType
	} from "@/lib/index.js"
	import { onMount } from "svelte"

	const { themeMode, toggleThemeMode } = themeModeUtil()
	const { colors } = getThemeConfigContext()

	let activeThemeMode: ThemeModeType = $state("light")

	onMount(() => {
		const _currentThemeMode = themeMode()
		activeThemeMode = _currentThemeMode
	})
</script>

<h1>activeThemeMode: {activeThemeMode}</h1>
<p>colorBg: <strong>{colors[activeThemeMode].colorBg}</strong></p>
<Button
	onclick={() => {
		toggleThemeMode((t) => {
			activeThemeMode = t
		})
	}}
>
	<InfoIcon />
	Toggle Theme
</Button>
