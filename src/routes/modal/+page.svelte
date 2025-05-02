<script lang="ts">
	import { Button, Modal } from "@/lib/index.js"

	let openModal = $state(false)

	function handleClose() {
		openModal = false
	}
</script>

<Modal isOpen={openModal} {handleClose}>
	<Modal.Header {handleClose}>
		<h1>test header</h1>
	</Modal.Header>
	<Modal.Content>
		<p>test content</p>
	</Modal.Content>
</Modal>

<Button
	onclick={() => {
		openModal = !openModal
	}}
>
	Open Modal
</Button>
