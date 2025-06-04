<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type {
		ActionEntryType,
		ColorType,
		VariantType
	} from "../../types/index.js"
	import styles from "./Input.module.css"
	import { observeAttributeAction } from "../../actions/index.js"
	import { actionUtil } from "../../utils/index.js"

	interface Props extends HTMLInputAttributes {
		label?: string
		variant?: VariantType
		color?: ColorType
		focused?: boolean
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		color = "primary",
		focused = false,
		actions = [],
		children,
		...rest
	}: Props = $props()

	let el: HTMLInputElement

	let helperText = $state<string | null>(null)

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
		styles.inputGroup,
		{
			[color]: Boolean(color),
			["border-error"]: Boolean(helperText),
			[styles.helperTextVisible]: Boolean(helperText)
		}
	)}
>
	<input
		class={classMapUtil({
			["border-error"]: Boolean(helperText)
		})}
		bind:this={el}
		use:observeAttributeAction={{
			attr: "data-error",
			updateValue: (value) => {
				helperText = value
			}
		}}
		use:actionUtil={actions}
		placeholder={rest.type === "search" ? rest.placeholder : " "}
		{...rest}
	/>

	{#if label}
		<label for={rest.id ?? rest.name}>{label}</label>
	{/if}

	{#if helperText}
		<span
			class={classMapUtil([variant, styles], styles.helper, "text-on-error")}
		>
			{helperText}
		</span>
	{/if}
</div>
