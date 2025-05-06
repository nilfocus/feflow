<script lang="ts">
	import { Button, Utils } from "@/lib/index.js"
	import { onMount } from "svelte"

	const { getTheme, toggleTheme } = Utils.themeUtil()

	let themeMode = $state("")

	onMount(() => {
		const currentTheme = getTheme()
		themeMode = currentTheme
	})
</script>

<h1>Welcome {themeMode}</h1>

<Button
	onclick={() => {
		toggleTheme((t) => {
			themeMode = t
		})
	}}
>
	Toggle Theme
</Button>
