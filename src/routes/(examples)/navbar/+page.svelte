<script lang="ts">
	import { InputSearch, Menu, Navbar } from "@/lib/index.js"
</script>

<Navbar id="nav1" variant="full" align="left">
	{#snippet left()}
		<a href="/">
			<Navbar.Item aria-current="page">active</Navbar.Item>
		</a>
		<a href="/">
			<Navbar.Item>test</Navbar.Item>
		</a>
		<Menu id="one" class="border-0">
			{#snippet anchor()}
				<Navbar.Item>Open menu</Navbar.Item>
			{/snippet}

			{#snippet items(handleClose)}
				<Menu.Item onclick={handleClose}>test1</Menu.Item>
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

	{#snippet center()}
		<InputSearch variant="contained" placeholder="test..." />
	{/snippet}

	{#snippet right(toggler)}
		<div
			style="
			display: flex;
			align-items: center; 
			justify-content: space-between;
			padding: 0 1rem;
			"
		>
			{@render toggler?.()}
			<h2 style="flex: 1;">Lo<span style="color: aqua;">Go</span></h2>
		</div>
	{/snippet}
</Navbar>

<br />
<br />

<Navbar id="nav2" variant="collapse" align="right">
	{#snippet left(toggler)}
		<div
			style="
			display: flex;
			align-items: center; 
			justify-content: space-between;
			padding: 0 1rem;
			margin-bottom: 1rem;
			"
		>
			{@render toggler?.()}
			<h2>Lo<span style="color: aqua;">Go</span></h2>
		</div>
	{/snippet}

	{#snippet center()}
		<InputSearch variant="contained" placeholder="test..." />
	{/snippet}

	{#snippet right()}
		<a href="/">
			<Navbar.Item aria-current="page">active</Navbar.Item>
		</a>
		<a href="/">
			<Navbar.Item>test</Navbar.Item>
		</a>
		<Menu id="two" class="border-0">
			{#snippet anchor()}
				<Navbar.Item>Open menu</Navbar.Item>
			{/snippet}

			{#snippet items(handleClose)}
				<Menu.Item onclick={handleClose}>test1</Menu.Item>
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
