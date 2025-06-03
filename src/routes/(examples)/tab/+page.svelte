<script lang="ts">
	import { Button, Tab } from "@/lib/index.js"
	import { fade, fly } from "svelte/transition"

	let activeTab = $state({
		tab1: "1",
		tab2: "1",
		tab3: "1"
	})

	const tabs = [
		{ id: "1", label: "label1", content: "test1", icon: "&#9734;" },
		{ id: "2", label: "label2", content: "test2" }
	]
</script>

{#snippet content(isActive: boolean, content: any)}
	<Tab.Content
		{isActive}
		transition={{
			in: [fly, { x: 300, duration: 400 }],
			out: [fade, { duration: 300 }]
		}}
	>
		{content}
	</Tab.Content>
{/snippet}

{#snippet icon(s: string)}
	<span style="font-size: 20px;">{@html s}</span>
{/snippet}

<Tab id="tab1">
	<Tab.Item>
		{#each tabs as tab}
			<Button
				id={tab.id}
				title={tab.label}
				variant="text"
				style="flex:1;"
				onclick={() => {
					activeTab.tab1 = tab.id
				}}
			>
				{#if tab.icon}
					{@render icon(tab.icon)}
				{/if}
				{tab.label}
			</Button>
		{/each}
	</Tab.Item>

	{#each tabs as tab}
		{@render content(activeTab.tab1 === tab.id, tab.content)}
	{/each}
</Tab>

<br />
<br />
<br />
<br />

<Tab id="tab2" style="background: transparent;">
	<Tab.Item hoverFollower>
		{#each tabs as tab}
			<Button
				id={tab.id}
				title={tab.label}
				variant="text"
				style="flex:1;"
				onclick={() => {
					activeTab.tab2 = tab.id
				}}
			>
				{#if tab.icon}
					<span style="font-size: 20px;">{@html tab.icon}</span>
				{/if}
				{tab.label}
			</Button>
		{/each}
	</Tab.Item>

	{#each tabs as tab}
		{@render content(activeTab.tab2 === tab.id, tab.content)}
	{/each}
</Tab>

<br />
<br />
<br />
<br />

<Tab id="tab3">
	<Tab.Item>
		{#each tabs as tab}
			<Button
				id={tab.id}
				title={tab.label}
				variant="text"
				onclick={() => {
					activeTab.tab3 = tab.id
				}}
			>
				{#if tab.icon}
					<span style="font-size: 20px;">{@html tab.icon}</span>
				{/if}
				{tab.label}
			</Button>
		{/each}
	</Tab.Item>

	{#each tabs as tab}
		{@render content(activeTab.tab3 === tab.id, tab.content)}
	{/each}
</Tab>
