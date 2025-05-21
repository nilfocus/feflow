<script lang="ts">
	import { classMap, InputSearch, Menu, Navbar } from "@/lib/index.js"

	let navOpened = $state(false)
</script>

<Navbar class={classMap({ show: navOpened })} data-toggle="full">
	{#snippet start()}
		<div
			style="
			display: flex;
			align-items: center; 
			justify-content: space-between;
			padding: 0 1rem;
			margin-bottom: 1rem;
			"
		>
			<h2>Logo</h2>
			<Navbar.Toggler
				class="md"
				onchange={() => {
					navOpened = !navOpened
				}}
			/>
		</div>
	{/snippet}

	{#snippet center()}
		<InputSearch variant="contained" placeholder="test..." />
	{/snippet}

	{#snippet end()}
		<a href="/">
			<Navbar.Item aria-current="page">active</Navbar.Item>
		</a>
		<a href="/">
			<Navbar.Item>test</Navbar.Item>
		</a>
		<Menu class="border-0">
			{#snippet anchor()}
				<Navbar.Item>Open menu</Navbar.Item>
			{/snippet}

			{#snippet items(handleClose)}
				<a href="/">
					<Menu.Item>test1</Menu.Item>
				</a>
				<a href="/">
					<Menu.Item>test2</Menu.Item>
				</a>
				<a href="/">
					<Menu.Item>test3</Menu.Item>
				</a>
			{/snippet}
		</Menu>
		<Navbar.Item variant="contained">test4</Navbar.Item>
		<Navbar.Item variant="outlined">test5</Navbar.Item>
	{/snippet}
</Navbar>
<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
	<h1>test</h1>
</main>
