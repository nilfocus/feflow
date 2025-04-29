<script lang="ts">
	import { Button, Drawer, DrawerHeader } from "@/lib/index.js"

	let openDrawer = $state(false)

	function handleOpenDrawer() {
		openDrawer = !openDrawer
	}
</script>

{#snippet headerContent()}
	<span>logo</span>
{/snippet}

{#snippet headerSnippet()}
	<DrawerHeader
		content={headerContent}
		handleClose={() => {
			openDrawer = false
		}}
	/>
{/snippet}

{#snippet contentSnippet()}
	<a
		href={"/"}
		onclick={() => {
			handleOpenDrawer()
		}}
	>
		{"label"}
	</a>
{/snippet}

<Drawer
	isOpen={openDrawer}
	onClose={() => {
		openDrawer = false
	}}
	header={headerSnippet}
	content={contentSnippet}
/>

<Button onclick={handleOpenDrawer}>Open Drawer</Button>
