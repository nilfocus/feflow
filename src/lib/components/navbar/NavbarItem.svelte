<script lang="ts">
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { HTMLButtonAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import styles from "./NavbarItem.module.css"
	import type { VariantType } from "../../types/index.js"

	interface Props extends HTMLButtonAttributes {
		variant?: VariantType
	}

	let {
		class: className = "",
		variant = "text",
		children,
		...rest
	}: Props = $props()
</script>

<Button
	{...rest}
	{variant}
	class={classMapUtil(className, [className, styles], styles.navbarItem, [
		variant,
		styles
	])}
>
	{@render children?.()}
</Button>
