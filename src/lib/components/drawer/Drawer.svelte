<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction, resizeAction } from "../../actions/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		handleClose: () => void
		header: Snippet
		content: Snippet
	}

	let {
		class: className = "",
		isOpen,
		handleClose,
		header,
		content,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.drawer]: true,
		[styles.show]: isOpen
	})}
	use:clickOutsideAction={{ handler: handleClose }}
	use:resizeAction={{
		handler: () => {
			if (window.innerWidth > 768) {
				handleClose()
			}
		}
	}}
	{...rest}
>
	{@render header()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>
