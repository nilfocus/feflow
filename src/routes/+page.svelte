<script lang="ts">
	import { Actions } from "@/lib/index.js"

	function handleShortcut(event: KeyboardEvent) {
		console.log("Shortcut pressed!", event)
	}

	function onScrollToEnd() {
		console.log("end")
	}
</script>

<br />
<br />

<div
	use:Actions.onShortcutAction={{
		keys: ["Control", "F"],
		callback: handleShortcut,
		preventDefault: false
	}}
>
	Press Ctrl + F
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
