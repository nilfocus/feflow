<script lang="ts">
	import { Button, Menu } from "@/lib/index.js"

	let isOpen = $state(false)
</script>

<Button
	onclick={() => {
		isOpen = !isOpen
	}}
>
	Open menu
</Button>

<Menu
	{isOpen}
	handleClose={() => {
		isOpen = false
	}}
>
	<Menu.Item onclick={() => null}>
		<Button variant="text">Edit</Button>
	</Menu.Item>
	<Menu.Item onclick={() => null}>
		<Button variant="text">Print</Button>
	</Menu.Item>
</Menu>
