<script lang="ts">
	import { classMap, InputSearch, Menu, Navbar } from "@/lib/index.js"

	let navOpened = $state({
		full: false,
		collapse: false
	})
</script>

<Navbar
	class={classMap({ show: navOpened.full })}
	data-toggle="full"
	data-align="start"
>
	{#snippet start()}
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

	{#snippet end()}
		<div
			style="
			display: flex;
			align-items: center; 
			justify-content: space-between;
			padding: 0 1rem;
			"
		>
			<Navbar.Toggler
				id="togglerFull"
				class="md"
				align="left"
				onchange={() => {
					navOpened.full = !navOpened.full
				}}
			/>
			<!-- <div ></div> -->
			<h2 style="flex: 1;">Lo<span style="color: aqua;">Go</span></h2>
		</div>
	{/snippet}
</Navbar>

<br />
<br />

<Navbar
	class={classMap({ show: navOpened.collapse })}
	data-toggle="collapse"
	data-align="end"
>
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
			<h2>Lo<span style="color: aqua;">Go</span></h2>
			<Navbar.Toggler
				id="togglerCollapse"
				class="md"
				align="right"
				onchange={() => {
					navOpened.collapse = !navOpened.collapse
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
