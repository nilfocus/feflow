<script lang="ts">
	import type { HorizontalPositionType } from "../../types/index.js"
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends HTMLInputAttributes {
		align?: Exclude<HorizontalPositionType, "center">
	}

	let {
		class: className = "",
		align = "right",
		children,
		...rest
	}: Props = $props()
</script>

<div class={classMapUtil(className, "toggler")} style="--align: {align}">
	<input
		{...rest}
		class="controller"
		type="checkbox"
		name={rest.id ?? "toggler"}
		id={rest.id ?? "toggler"}
	/>
	<label class="container" for={rest.id ?? "toggler"}>
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
	.toggler {
		position: absolute;
		left: 3rem;
		right: 3rem;
		width: auto;
	}

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
		float: var(--align);
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
		}
	}
</style>
