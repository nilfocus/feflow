<script lang="ts">
	import { actionUtil, classMapUtil } from "../../utils/index.js"
	import { hoverFollowerAction } from "../../actions/index.js"
	import type { ActionEntryType, OrientationType } from "../../types/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className,
		orientation = "vertical",
		actions,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class="hoverFollower"
	use:hoverFollowerAction={orientation}
	use:actionUtil={actions}
>
	<div class={classMapUtil("overlay", className)}></div>
	{@render children?.()}
</div>

<style>
	.hoverFollower {
		position: relative;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 8px;
		background: var(--ff-color-surface);
		opacity: 0;
		pointer-events: none;
		transition:
			transform 0.3s ease,
			height 0.3s ease,
			opacity 0.2s ease;
		z-index: 0;
	}
</style>
