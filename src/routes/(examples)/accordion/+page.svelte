<script lang="ts">
	import { Accordion } from "@/lib/index.js"
</script>

{#each Array.from(Array(10)) as _, i}
	<Accordion id="sec{i}" variant="text" label="test {i}">
		<span>test {i}</span>
	</Accordion>
{/each}
