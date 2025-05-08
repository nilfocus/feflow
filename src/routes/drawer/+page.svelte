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

{#snippet drawerHeader()}
	<Drawer.Header content={headerContent} {handleClose} />
{/snippet}

{#snippet contentDrawer()}
	<a href="/" onclick={handleClose}>label</a>
{/snippet}

<Drawer
	autoClose
	isOpen={isOpenLeft}
	position={"left"}
	{handleClose}
	header={drawerHeader}
	content={contentDrawer}
/>

<Drawer
	autoClose
	isOpen={isOpenRight}
	position={"right"}
	{handleClose}
	header={drawerHeader}
	content={contentDrawer}
/>

<Button onclick={handleOpenLeft}>Left</Button>
<Button onclick={handleOpenRight}>Right</Button>
