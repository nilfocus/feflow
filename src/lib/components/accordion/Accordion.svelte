<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import type { VariantType } from "../../types/index.js"
	import { KeyboardArrowLeftIcon } from "../../icons/index.js"

	interface Props extends HTMLInputAttributes {
		label: string
		variant?: VariantType
	}

	let {
		class: className = "",
		label,
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<div class="accordion">
	<input type="radio" id={rest.id} name="accordion" {...rest} />
	<label for={rest.id} class="header">
		<label>{label}</label>
		<div class="icon">
			<KeyboardArrowLeftIcon />
		</div>
	</label>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.accordion {
		margin-bottom: 5px;
	}

	.accordion input[type="radio"] {
		display: none;
	}

	.accordion .content {
		height: 0px;
		padding: 0px;
		background: var(--feflow-color-surface);
		border-top: 1px solid var(--feflow-color-border);
		overflow: hidden;
		transition: all 0.3s ease;
		opacity: 0;
	}

	.accordion input[type="radio"]:checked + .header + .content {
		height: auto;
		padding: 15px;
		opacity: 1;
	}

	.icon {
		display: flex;
		align-items: center;
		transition: all 0.5s ease;
		transform: rotate(-90deg);
	}

	.accordion input[type="radio"]:checked + .header .icon {
		transform: rotate(90deg);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px;
		background: var(--feflow-color-surface);
		cursor: pointer;
		font-weight: bold;
		text-align: left;
	}
</style>
