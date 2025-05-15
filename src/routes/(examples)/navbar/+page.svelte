<script lang="ts">
	import { Button, InputSearch, Menu, Navbar, Window } from "@/lib/index.js"

	let menuCollapsed = $state(false)
</script>

<Navbar>
	<div data-position="start">Logo</div>
	<div data-position="center">
		<InputSearch variant="contained" />
	</div>
	<div data-position="end">
		<Navbar.Item aria-current="page">active</Navbar.Item>
		<Navbar.Item>test</Navbar.Item>
		<Button
			variant="text"
			onclick={() => {
				menuCollapsed = !menuCollapsed
			}}
		>
			Open menu
		</Button>
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
	</div>
</Navbar>
<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
	<h1>test</h1>
</main>
