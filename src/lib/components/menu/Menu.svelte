<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Menu.module.css"
	import Card from "../card/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { clickOutsideAction } from "../../actions/index.js"

	export interface MenuProps {
		isOpen: boolean
		handleClose: () => void
	}

	interface Props extends MenuProps, HTMLAttributes<HTMLDivElement> {}

	let {
		class: className = "",
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()
</script>

<div
	use:clickOutsideAction={{ isOpen, handler: handleClose }}
	class={classMapUtil({
		[className as string]: true,
		[styles.menu]: true,
		[styles.show]: isOpen
	})}
	{...rest}
>
	<Card class={styles.content} onclick={handleClose}>
		{@render children?.()}
	</Card>
</div>
