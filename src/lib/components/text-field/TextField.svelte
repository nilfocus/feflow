<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { VariantType } from "../../types/index.js"
	import styles from "./TextField.module.css"

	interface Props extends HTMLInputAttributes {
		label?: string
		variant?: VariantType
		focused?: boolean
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		focused = false,
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
	<input bind:this={el} placeholder={rest.placeholder ?? " "} {...rest} />

	{#if label}
		<label for={rest.id ?? rest.name}>{label}</label>
	{/if}

	{#if variant === "outlined"}
		<fieldset>
			<legend>
				<span>{label}</span>
			</legend>
		</fieldset>
	{/if}
</div>
