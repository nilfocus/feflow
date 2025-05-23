<script lang="ts">
	import { Menu, Navbar, Separator } from "@/lib/index.js"
	import type { Snippet } from "svelte"
</script>

{#snippet logo()}
	<h2>Lo<span style="color: aqua;">Go</span></h2>
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

{#snippet content(s: string)}
	<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
		<h1>{s}</h1>
	</main>
{/snippet}

<div style="padding: 3rem 0; background: black;">
	{#snippet navFree()}
		<Navbar id="navFree" style="display: flex; align-items: center; gap: 1rem;">
			{@render logo?.()}

			<div style="flex:1;"></div>

			<Navbar.Item aria-current="page">active</Navbar.Item>
			<Menu id="menu-navFree">
				{#snippet anchor()}
					<Navbar.Item>Open menu</Navbar.Item>
				{/snippet}

				{#snippet items()}
					<Menu.Item>test1</Menu.Item>
					<Separator />
					<a href="/">
						<Menu.Item>test2</Menu.Item>
					</a>
					<Separator />
					<a href="/">
						<Menu.Item>test3</Menu.Item>
					</a>
				{/snippet}
			</Menu>

			<Navbar.Toggler id="toggler-1" />
		</Navbar>

		{@render content?.("navFree")}
	{/snippet}
	{@render container?.(navFree)}

	<br />
	<br />

	{#snippet navSticky()}
		<div style="text-align: center; margin: 5rem 0;">
			<h2>Scroll Down</h2>
			<p>Scroll down to see the sticky effect.</p>
		</div>

		<Navbar
			id="navSticky"
			style="position: sticky; top: 0; display: flex; align-items: center; gap: 1rem;"
			isTranslucent
		>
			<Navbar.Toggler id="toggler-2" />
			<Navbar.Item variant="contained">test1</Navbar.Item>
			<Navbar.Item variant="outlined">test2</Navbar.Item>
			<div style="flex: 1;"></div>
			{@render logo?.()}
		</Navbar>
		{@render content?.("navSticky")}
	{/snippet}
	{@render container?.(navSticky)}
</div>
