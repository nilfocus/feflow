<script lang="ts">
	import { hoverFollowerAction } from "../../actions/index.js"
	import type { OrientationType } from "../../types/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
	}

	let { children, orientation = "vertical", ...rest }: Props = $props()
</script>

<div {...rest} class="hoverFollower" use:hoverFollowerAction={orientation}>
	<div class="overlay"></div>
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
