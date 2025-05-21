<script lang="ts">
	import { Button, InputSearch, Menu, Navbar } from "@/lib/index.js"

	let isOpen = $state(false)
</script>

<Navbar data-toggle="collapse">
	{#snippet start()}
		<div
			style="
			display: flex; 
			align-items: center; 
			justify-content: space-between;
			"
		>
			<h2>Logo</h2>
			<Button
				variant="text"
				onclick={() => {
					isOpen = !isOpen
				}}
			>
				{#if isOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e3e3e3"
					>
						<path
							d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e3e3e3"
					>
						<path
							d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
						/>
					</svg>
				{/if}
			</Button>
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
		<Menu>
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
