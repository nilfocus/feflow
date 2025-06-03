<script lang="ts">
	import { BottomSheet, Button } from "@/lib/index.js"

	let openBottomSheet = $state(false)
</script>

<BottomSheet
	isOpen={openBottomSheet}
	handleClose={() => {
		openBottomSheet = false
	}}
>
	<h1>test</h1>
</BottomSheet>

<Button
	onclick={() => {
		openBottomSheet = !openBottomSheet
	}}
>
	Open BottomSheet
</Button>
