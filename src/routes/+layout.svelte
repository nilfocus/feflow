<script lang="ts">
	import { themeModeUtil, ThemeProvider, Toaster } from "@/lib/index.js"
	import { themeModeState } from "@/lib/index.js"
	import { onMount } from "svelte"

	let { children } = $props()
	const { getThemeMode } = themeModeUtil()
	const _themeModeState = themeModeState()

	onMount(() => {
		const themeMode = getThemeMode()
		_themeModeState.setThemeMode(themeMode)
	})
</script>

<Toaster fullWidth />

<ThemeProvider
	
>
	{@render children()}
</ThemeProvider>
