<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { AlignType } from "../../types/index.js"

	export interface ModalActionsProps {
		align?: AlignType
	}

	interface Props extends ModalActionsProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		align = "end",
		children,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		["actions"]: true
	})}
	style="justify-content: {align};"
	{...rest}
>
	{@render children?.()}
</div>

<style>
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--feflow-color-border);
		flex-wrap: wrap;
	}

	.actions.border-0 {
		border-top: none;
	}
</style>
