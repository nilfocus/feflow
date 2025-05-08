<script lang="ts">
	import { Button, Drawer } from "@/lib/index.js"

	let isOpenLeft = $state(false)
	let isOpenRight = $state(false)

	function handleOpenLeft() {
		isOpenLeft = !isOpenLeft
	}

	function handleOpenRight() {
		isOpenRight = !isOpenRight
	}

	function handleClose() {
		isOpenLeft ? (isOpenLeft = false) : (isOpenRight = false)
	}
</script>

{#snippet headerContent()}
	<span>logo</span>
{/snippet}

{#snippet drawerHeaderLeft()}
	<Drawer.Header content={headerContent} {handleClose} />
{/snippet}

{#snippet drawerHeaderRight()}
	<Drawer.Header content={headerContent} />
{/snippet}

{#snippet contentDrawer()}
	<a href="/" onclick={handleClose}>label</a>
{/snippet}

<Drawer
	isOpen={isOpenLeft}
	position={"left"}
	{handleClose}
	header={drawerHeaderLeft}
	content={contentDrawer}
/>

<Drawer
	variant="permanent"
	isOpen={isOpenRight}
	position={"right"}
	header={drawerHeaderRight}
	content={contentDrawer}
/>

<Button onclick={handleOpenLeft}>Left</Button>
