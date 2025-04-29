<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import styles from "./Badge.module.css"
	import type { SizeType, VariantType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"

	interface Props extends HTMLButtonAttributes {
		size?: SizeType
		variant?: VariantType
	}

	let {
		class: className = "",
		size = "sm",
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<Button
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles[size]]: true,
		[styles[variant]]: true,
		[styles.badge]: true
	})}
>
	{@render children?.()}
</Button>
