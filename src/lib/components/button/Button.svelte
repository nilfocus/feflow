<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { ColorType, VariantType } from "../../types/index.js"
	import Spinner from "../spinner/index.js"
	import styles from "./Button.module.css"

	interface Props extends HTMLButtonAttributes {
		variant?: VariantType
		bgColor?: ColorType
		isLoading?: boolean
	}

	let {
		class: className = "",
		variant = "contained",
		bgColor = "primary",
		isLoading,
		children,
		...rest
	}: Props = $props()
</script>

<button
	class={classMapUtil(
		className,
		[styles, className],
		styles[variant],
		styles.button,
		[`bg-${bgColor}`]
	)}
	type={rest.type ?? "button"}
	{...rest}
>
	{#if isLoading}
		<Spinner />
	{:else}
		{@render children?.()}
	{/if}
</button>
