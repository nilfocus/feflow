<script lang="ts">
	import { InputSearch, Menu, Navbar } from "@/lib/index.js"

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
		<a href="/">
			<Navbar.Item aria-current="page">active</Navbar.Item>
		</a>
		<a href="/">
			<Navbar.Item>test</Navbar.Item>
		</a>
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
			<a href="/">
				<Menu.Item>test1</Menu.Item>
			</a>
			<a href="/">
				<Menu.Item>test2</Menu.Item>
			</a>
			<a href="/">
				<Menu.Item>test3</Menu.Item>
			</a>
		</Menu>
	{/snippet}
</Navbar>
<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
	<h1>test</h1>
</main>
