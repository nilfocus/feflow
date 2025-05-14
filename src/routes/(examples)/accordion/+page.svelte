<script lang="ts">
	import { Accordion } from "@/lib/index.js"

	let isOpen = $state(false)
</script>

<Accordion
	onclick={() => {
		isOpen = !isOpen
	}}
	variant="text"
	label="test"
	{isOpen}
>
	<span>test</span>
</Accordion>

<Accordion label="test" isOpen={true}>
	<span>test</span>
</Accordion>
