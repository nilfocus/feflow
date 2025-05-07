<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"

	interface Props extends Omit<HTMLInputAttributes, "type"> {}

	let { ...rest }: Props = $props()
</script>

<input defaultValue="#ffffff" type="color" {...rest} />

<style>
	input[type="color" i] {
		all: unset;
		appearance: none;
		width: 40px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid var(--feflow-color-border);
		background: none;
		cursor: pointer;
		padding: 0;
	}

	input[type="color" i]::-webkit-color-swatch-wrapper {
		background: var(--feflow-color-surface) !important;
	}
</style>
