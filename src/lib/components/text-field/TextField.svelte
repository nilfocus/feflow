<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ActionEntryType, VariantType } from "../../types/index.js"
	import styles from "./TextField.module.css"
	import { actionUtil } from "../../utils/index.js"

	interface Props extends HTMLInputAttributes {
		label?: string
		variant?: VariantType
		focused?: boolean
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		focused = false,
		actions,
		children,
		...rest
	}: Props = $props()

	let el: HTMLInputElement | undefined

	$effect(() => {
		if (focused) {
			el?.focus()
		}
	})
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.textField,
		{ [styles.labelEmpty]: !Boolean(label) }
	)}
>
	<input
		{...rest}
		bind:this={el}
		placeholder={rest.placeholder ?? " "}
		use:actionUtil={actions}
	/>

	{#if label}
		<label for={rest.id ?? rest.name}>{label}</label>
	{/if}

	<fieldset>
		<legend>
			<span>{label}</span>
		</legend>
	</fieldset>
</div>
