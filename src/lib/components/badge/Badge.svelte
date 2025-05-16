<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import styles from "./Badge.module.css"
	import type { SizeType, VariantType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"

	interface Props extends HTMLButtonAttributes {
		size?: SizeType
		variant?: VariantType
		roundedFull?: boolean
	}

	let {
		class: className = "",
		size = "xs",
		roundedFull = false,
		children,
		...rest
	}: Props = $props()
</script>

<Button
	class={classMapUtil(
		className,
		[className, styles],
		styles.badge,
		styles[size],
		{ [styles.roundedFull]: roundedFull }
	)}
	{...rest}
>
	{@render children?.()}
</Button>
