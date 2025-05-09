<script lang="ts">
	import { Actions, getSections, ScrollSection } from "@/lib/index.js"

	const sectionsData = Array.from({ length: 25 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))
</script>

<ScrollSection data={getSections()} />
<br />
<br />
{#each sectionsData as { reference }}
	<section
		use:Actions.scrollSectionAction
		id={reference}
		style="height: 100vh; border: 1px solid #ccc"
	>
		<h2>{reference}</h2>
	</section>
{/each}
