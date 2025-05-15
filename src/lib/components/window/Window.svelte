<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Card from "../card/index.js"
	import Badge from "../badge/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<Card class={classMapUtil(className)} {...rest}>
	<div class="header">
		<Badge class="bg-error" roundedFull size="xs"></Badge>
		<Badge class="bg-warning" roundedFull size="xs"></Badge>
		<Badge class="bg-success" roundedFull size="xs"></Badge>
	</div>
	{@render children?.()}
</Card>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 15px;
	}
</style>
