<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"
	import { clickOutsideAction } from "../../actions/index.js"

	interface Props extends HTMLInputAttributes {
		anchor: Snippet<[]>
		items: Snippet<[() => void]>
	}

	let { class: className = "", anchor, items, ...rest }: Props = $props()

	let el: HTMLInputElement | undefined

	function handleClose() {
		if (el) {
			el.checked = false
		}
	}
</script>

<div class="menu" use:clickOutsideAction={{ handler: handleClose }}>
	<input
		{...rest}
		bind:this={el}
		type="checkbox"
		id={rest.id ?? "checkbox"}
		style="display: none;"
	/>
	<label
		style="
		display: inline-block;
		cursor: pointer;
		"
		for={rest.id ?? "checkbox"}
	>
		<span class="anchor">
			{@render anchor?.()}
		</span>
	</label>
	<div class="content">
		{@render items?.(handleClose)}
	</div>
</div>

<style>
	.menu {
		position: relative;
		user-select: none;
	}

	.anchor {
		display: inline-block;
	}

	.anchor:active {
		pointer-events: none;
	}

	.content {
		position: absolute;
		left: 0;
		right: unset;
		top: calc(2em + 0.35em);
		background: var(--ff-color-surface);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 0;
		z-index: 2;
		margin: 0;
		opacity: 0;
		transform: translateY(-10px);
		pointer-events: none;
		transition:
			opacity 150ms ease-in-out,
			transform 150ms ease-in-out;
	}

	#checkbox:checked ~ .content {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
</style>
