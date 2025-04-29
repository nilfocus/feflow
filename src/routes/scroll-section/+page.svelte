<script lang="ts">
	import { Actions, ScrollSection, States } from "@/lib/index.js"

	const sectionsData = Array.from({ length: 15 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))

	const _scrollSectionState = States.scrollSectionState()
	const registeredSections = $derived(_scrollSectionState.getSections())
</script>

<ScrollSection data={registeredSections} />
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
