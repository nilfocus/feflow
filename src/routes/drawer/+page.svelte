<script lang="ts">
	import { Button, Drawer } from "@/lib/index.js"

	let openDrawer = $state(false)

	function handleOpenDrawer() {
		openDrawer = !openDrawer
	}
</script>

{#snippet headerContent()}
	<span>logo</span>
{/snippet}

{#snippet drawerHeader()}
	<Drawer.Header
		content={headerContent}
		handleClose={() => {
			openDrawer = false
		}}
	/>
{/snippet}

{#snippet contentDrawer()}
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
	handleClose={() => {
		openDrawer = false
	}}
	header={drawerHeader}
	content={contentDrawer}
/>

<Button onclick={handleOpenDrawer}>Open Drawer</Button>
