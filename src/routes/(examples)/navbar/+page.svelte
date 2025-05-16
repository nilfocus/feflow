<script lang="ts">
	import { Button, InputSearch, Menu, Navbar, Window } from "@/lib/index.js"

	let menuCollapsed = $state(false)
</script>

<Navbar>
	{#snippet start()}
		Logo
	{/snippet}

	{#snippet center()}
		<InputSearch variant="contained" />
	{/snippet}

	{#snippet end()}
		<Navbar.Item aria-current="page">active</Navbar.Item>
		<Navbar.Item>test</Navbar.Item>
		<Navbar.Item
			onclick={() => {
				menuCollapsed = !menuCollapsed
			}}
		>
			Open menu
		</Navbar.Item>
		<Menu
			isOpen={menuCollapsed}
			handleClose={() => {
				menuCollapsed = false
			}}
		>
			<Menu.Item>test1</Menu.Item>
			<Menu.Item>test2</Menu.Item>
			<Menu.Item>test3</Menu.Item>
		</Menu>
	{/snippet}
</Navbar>
<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
	<h1>test</h1>
</main>
