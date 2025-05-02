<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"
	import { CloseIcon } from "../../icons/index.js"
	import type { AlignType } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		align?: AlignType
		closable?: boolean
		handleClose: () => void
	}

	let {
		class: className = "",
		align = "start",
		closable = true,
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		["header"]: true
	})}
>
	<div class="content" style={`justify-content: ${align};`}>
		{@render children?.()}
	</div>
	{#if closable}
		<Button variant="text" onclick={handleClose}>
			<CloseIcon />
		</Button>
	{/if}
</div>

<style>
	.header {
		padding: 0 3px 0 3px;
		display: flex;
		justify-content: space-between;
		align-items: last baseline;
		gap: 1rem;
		height: 70px;
		border-bottom: 1px solid var(--sc-color-border);
	}

	.header.border-0 {
		border-bottom: none;
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		flex: 1;
		display: flex;
	}
</style>
