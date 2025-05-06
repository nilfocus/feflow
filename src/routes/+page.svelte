<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import { Button, Utils } from "@/lib/index.js"
	import { onMount } from "svelte"

	const { colorMode, toggleColorMode } = Utils.colorModeUtil()

	let currentColorMode = $state("")

	onMount(() => {
		const _currentColorMode = colorMode()
		currentColorMode = _currentColorMode
	})
</script>

<h1>Welcome {currentColorMode}</h1>

<Button
	onclick={() => {
		toggleColorMode((t) => {
			currentColorMode = t
		})
	}}
>
	<InfoIcon />
	Toggle Theme
</Button>
