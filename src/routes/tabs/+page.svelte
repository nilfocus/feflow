<script lang="ts">
	import { Tab } from "@/lib/index.js"

	let activeTab = $state("1")

	const tabs = [
		{ id: "1", label: "opa1", content: "test1" },
		{ id: "2", label: "opa2", content: "test2" }
	]
</script>

<Tab>
	{#each tabs as tab}
		<Tab.Label label={tab.label} />
	{/each}

	{#each tabs as tab}
		<Tab.Content isActive={true}>
			<div
				class="tab-content {tab.id === activeTab ? 'active' : ''}"
				id={"content-" + tab.id}
			>
				{@html tab.content}
			</div>
		</Tab.Content>
	{/each}
</Tab>
