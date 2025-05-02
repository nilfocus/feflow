<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"
	import { CloseIcon } from "../../icons/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		handleClose: () => void
	}

	let {
		class: className = "",
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
	<div class="content">
		{@render children?.()}
	</div>
	<Button variant="text" onclick={handleClose}>
		<CloseIcon />
	</Button>
</div>

<style>
	.header {
		padding: 0 3px 0 3px;
		display: flex;
		justify-content: space-between;
		align-items: last baseline;
		gap: 1rem;
		height: 70px;
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
	}
</style>
