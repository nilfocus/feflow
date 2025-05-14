<script lang="ts">
	import { Button, Drawer } from "@/lib/index.js"

	type PositionType = "top" | "left" | "right" | "bottom"
	type PosType = PositionType | "rightPermanent"

	let drawerStates = $state({
		top: false,
		left: false,
		right: false,
		bottom: false,
		rightPermanent: true
	})

	function handleToggle(position: PosType) {
		drawerStates[position] = !drawerStates[position]
	}

	function handleClose(position: PosType) {
		drawerStates[position] = false
	}
</script>

{#snippet header()}
	<Drawer.Header>
		{#snippet content()}
			<span>logo</span>
		{/snippet}
	</Drawer.Header>
{/snippet}

{#snippet content()}
	<a href="/">label</a>
{/snippet}

<Drawer
	isOpen={drawerStates.top}
	position="top"
	handleClose={() => handleClose("top")}
	{header}
	{content}
/>

<Drawer
	isOpen={drawerStates.left}
	position="left"
	handleClose={() => handleClose("left")}
	{header}
	{content}
/>

<Drawer
	isOpen={drawerStates.right}
	position="right"
	handleClose={() => handleClose("right")}
	{header}
	{content}
/>

<Drawer
	isOpen={drawerStates.bottom}
	position="bottom"
	handleClose={() => handleClose("bottom")}
	{header}
	{content}
/>

<Drawer
	isOpen={drawerStates.rightPermanent}
	variant="permanent"
	position="right"
	{header}
	{content}
/>

<Button onclick={() => handleToggle("top")}>Top</Button>
<Button onclick={() => handleToggle("left")}>Left</Button>
<Button onclick={() => handleToggle("right")}>Right</Button>
<Button onclick={() => handleToggle("bottom")}>Bottom</Button>

<Button onclick={() => handleToggle("rightPermanent")}>Right Permanent</Button>
