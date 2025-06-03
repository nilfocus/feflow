<script lang="ts">
	import { Button, Tab } from "@/lib/index.js"
	import { fade, fly } from "svelte/transition"

	let activeTab = $state("1")

	const tabs = [
		{ id: "1", label: "label1", content: "test1", icon: "&#9734;" },
		{ id: "2", label: "label2", content: "test2" }
	]
</script>

<Tab>
	<Tab.Item>
		{#each tabs as tab}
			<Button
				id={tab.id}
				variant="text"
				style="flex:1;"
				onclick={() => {
					activeTab = tab.id
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
		<Tab.Content
			isActive={activeTab === tab.id}
			transition={{
				in: [fly, { x: 300, duration: 400 }],
				out: [fade, { duration: 300 }]
			}}
		>
			{tab.content}
		</Tab.Content>
	{/each}
</Tab>
