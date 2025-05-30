<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import { Actions, Button, themeMode } from "@/lib/index.js"

	const { toggleThemeMode } = themeMode()

	function handleShortcut(event: KeyboardEvent) {
		console.log("Shortcut pressed!", event)
	}

	function onScrollToEnd() {
		console.log("end")
	}
</script>

<br />
<br />

<h1>activeThemeMode</h1>
<Button onclick={toggleThemeMode}>
	<InfoIcon />
	Toggle Theme
</Button>

<br />
<br />

<div
	use:Actions.onShortcutAction={{
		keys: ["Control", "F"],
		callback: handleShortcut,
		preventDefault: true
	}}
>
	Press Ctrl + Shift + K
</div>

<br />
<br />

<div
	use:Actions.onScrollEndAction={onScrollToEnd}
	style="height: 200px; overflow-y: auto; border: 1px solid #ccc;"
>
	{#each Array(100) as _, i}
		<p>{i + 1}</p>
	{/each}
</div>
