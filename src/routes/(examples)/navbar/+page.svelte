<script lang="ts">
	import { InputSearch, Menu, Navbar } from "@/lib/index.js"
	import type { Snippet } from "svelte"
</script>

{#snippet logo()}
	<h2>Lo<span style="color: aqua;">Go</span></h2>
{/snippet}

{#snippet logoWithToggler(toggler: Snippet)}
	<div
		style="
		display: flex;
		align-items: center; 
		justify-content: space-between;
		padding: 0 1rem;
		"
	>
		{@render toggler?.()}
		{@render logo?.()}
	</div>
{/snippet}

{#snippet container(children: Snippet)}
	<div
		style="
		width: 500px; 
		max-height: 350px; 
		margin: 0 auto; 
		container-type: inline-size; 
		overflow: auto;
		background: yellowgreen;
		"
	>
		{@render children?.()}
	</div>
{/snippet}

{#snippet content()}
	<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
		<h1>test</h1>
	</main>
{/snippet}

<div style="padding: 3rem 0; background: black;">
	{#snippet navSticky()}
		<div style="text-align: center; margin: 5rem 0;">
			<h2>Scroll Down</h2>
			<p>Scroll down to see the sticky effect.</p>
		</div>

		<Navbar
			id="nav-sticky"
			variant="collapse"
			style="position: sticky; top: 0;"
			isTranslucent
		>
			{#snippet left(toggler)}
				{@render logoWithToggler?.(toggler)}
			{/snippet}

			{#snippet right()}
				<Navbar.Item variant="contained">test1</Navbar.Item>
				<Navbar.Item variant="outlined">test2</Navbar.Item>
			{/snippet}
		</Navbar>
		{@render content?.()}
	{/snippet}

	{@render container?.(navSticky)}

	<br />
	<br />

	{#snippet nav1()}
		<Navbar id="nav1" variant="full" align="left">
			{#snippet left()}
				<a href="/">
					<Navbar.Item aria-current="page">active</Navbar.Item>
				</a>
			{/snippet}

			{#snippet center()}
				<InputSearch variant="contained" placeholder="test..." />
			{/snippet}

			{#snippet right(toggler)}
				{@render logoWithToggler?.(toggler)}
			{/snippet}
		</Navbar>

		{@render content?.()}
	{/snippet}

	{@render container?.(nav1)}

	<br />
	<br />

	{#snippet nav2()}
		<Navbar id="nav2" variant="collapse" align="right" fadeOnScroll>
			{#snippet left(toggler)}
				{@render logoWithToggler?.(toggler)}
			{/snippet}

			{#snippet right()}
				<Menu id="two" class="border-0">
					{#snippet anchor()}
						<Navbar.Item>Open menu</Navbar.Item>
					{/snippet}

					{#snippet items()}
						<Menu.Item>test1</Menu.Item>
						<a href="/">
							<Menu.Item>test2</Menu.Item>
						</a>
						<a href="/">
							<Menu.Item>test3</Menu.Item>
						</a>
					{/snippet}
				</Menu>
			{/snippet}
		</Navbar>

		{@render content?.()}
	{/snippet}

	{@render container?.(nav2)}
</div>
