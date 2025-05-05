<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<div {...rest} class={"tabs"}>
	<!-- <div class="tab-labels">
		{#each tabs as tab, index}
			<input
				type="radio"
				name="tabs"
				id={tab.id}
				bind:group={activeTab}
				value={tab.id}
				checked={index === 0}
			/>
			<label for={tab.id}>{tab.label}</label>
		{/each}
		<div
			class="line"
			style="left: calc({tabs.findIndex(
				(t) => t.id === activeTab
			)} * (100% / {tabs.length}))"
		></div>
	</div> -->

	{@render children?.()}

	<!-- {#each tabs as tab}
		<div
			class="tab-content {tab.id === activeTab ? 'active' : ''}"
			id={"content-" + tab.id}
		>
			{@html tab.content}
		</div>
	{/each} -->
</div>

<style>
	.tabs {
		width: 100%;
		max-width: 500px;
		margin: 2rem auto;
		font-family: sans-serif;
		border-radius: 5px;
		overflow: hidden;
		background: #f4f4f4;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
		position: relative;
	}
</style>
