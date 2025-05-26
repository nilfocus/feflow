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
		roundedFull?: boolean
	}

	let {
		class: className = "",
		variant = "contained",
		bgColor = "primary",
		isLoading,
		roundedFull,
		children,
		...rest
	}: Props = $props()
</script>

<button
	{...rest}
	class={classMapUtil(
		className,
		[className, styles],
		styles[variant],
		styles.button,
		[`bg-${bgColor}`],
		{ [styles.roundedFull]: roundedFull }
	)}
	type={rest.type ?? "button"}
>
	{#if isLoading}
		<Spinner />
	{:else}
		{@render children?.()}
	{/if}
</button>
