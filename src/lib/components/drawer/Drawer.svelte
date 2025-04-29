<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction, resizeAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		onClose: () => void
		header: Snippet
		content: Snippet
	}

	let {
		class: className = "",
		isOpen,
		onClose,
		header,
		content,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	use:clickOutsideAction={{ handler: onClose }}
	use:resizeAction={{
		handler: () => {
			if (window.innerWidth > 768) {
				onClose()
			}
		}
	}}
	class={classMapUtil({
		[className as string]: true,
		[styles.opened]: isOpen,
		[styles.drawer]: true
	})}
>
	{@render header()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>
