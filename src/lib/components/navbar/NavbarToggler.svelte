<script lang="ts">
	import classMapUtil from "@/lib/utils/classMapUtil.js"
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends HTMLInputAttributes {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div class={classMapUtil(className, "toggler")}>
	<input
		{...rest}
		class="controller"
		type="checkbox"
		name="toggler"
		id="toggler"
	/>
	<label class="container" for="toggler">
		<svg
			class="menu-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="24px"
			height="24px"
		>
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
		<svg
			class="close-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="24px"
			height="24px"
		>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	</label>
</div>

<style>
	.toggler.md {
		display: none;
	}

	.controller {
		display: none;
	}

	.container {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		float: right;
	}

	svg {
		transition: opacity 0.2s ease;
		position: absolute;
	}

	.menu-icon {
		opacity: 1;
	}

	.close-icon {
		opacity: 0;
	}

	.controller:checked + .container .menu-icon {
		opacity: 0;
	}

	.controller:checked + .container .close-icon {
		opacity: 1;
	}

	@media screen and (max-width: 768px) {
		.toggler.md {
			display: block;
			position: fixed;
			left: 3rem;
			right: 3rem;
			width: auto;
		}
	}
</style>
