<script lang="ts">
	import { Button, Modal } from "@/lib/index.js"

	let openModal = $state(false)
</script>

<Modal
	label="test"
	isOpen={openModal}
	handleClose={() => {
		openModal = false
	}}
/>

<Button
	onclick={() => {
		openModal = !openModal
	}}
>
	Open Modal
</Button>
