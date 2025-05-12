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
		children,
		...rest
	}: Props = $props()
</script>

<Button
	class={classMapUtil(
		className as string,
		[className, styles],
		styles.badge,
		styles[size]
	)}
	{...rest}
>
	{@render children?.()}
</Button>
