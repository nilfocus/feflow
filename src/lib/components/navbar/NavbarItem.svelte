<script lang="ts">
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { HTMLButtonAttributes } from "svelte/elements"
	import Button from "../button/index.js"
	import styles from "./NavbarItem.module.css"

	interface Props extends HTMLButtonAttributes {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<Button
	variant="text"
	class={classMapUtil(className, [styles, className], styles.navbarItem)}
	{...rest}
>
	{@render children?.()}
</Button>
