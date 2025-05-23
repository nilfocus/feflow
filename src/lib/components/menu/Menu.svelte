<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { clickOutsideAction } from "../../actions/index.js"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLInputAttributes {
		anchor: Snippet<[]>
		items: Snippet<[]>
	}

	let { class: className = "", anchor, items, ...rest }: Props = $props()

	let el: HTMLInputElement | undefined

	function handleClose() {
		if (el) {
			el.checked = false
		}
	}
</script>

<div
	class={classMapUtil("menu", className)}
	use:clickOutsideAction={{ handler: handleClose }}
>
	<input
		{...rest}
		class="controller"
		bind:this={el}
		type="checkbox"
		id={rest.id ?? "checkbox"}
	/>
	<label class="container" for={rest.id ?? "checkbox"}>
		<span class="anchor">
			{@render anchor?.()}
		</span>
	</label>
	<div
		class="content"
		role="button"
		tabindex="0"
		onclick={handleClose}
		onkeydown={() => {}}
	>
		{@render items?.()}
	</div>
</div>

<style>
	.menu {
		position: relative;
		user-select: none;
	}

	.controller {
		display: none;
	}

	.container {
		display: inline-block;
		cursor: pointer;
	}

	.anchor {
		display: inline-block;
	}

	.anchor:active {
		pointer-events: none;
	}

	.content {
		position: absolute;
		overflow: hidden;
		left: 0;
		right: unset;
		top: calc(3em + 0.35em);
		background: var(--ff-color-surface);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 0;
		z-index: 2;
		margin: 0;
		opacity: 0;
		transform: translateY(-3px);
		pointer-events: none;
		transition:
			opacity 150ms ease-in-out,
			transform 150ms ease-in-out;
	}

	.controller:checked ~ .content {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
</style>
