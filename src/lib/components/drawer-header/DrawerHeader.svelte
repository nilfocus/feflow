<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./DrawerHeader.module.css"
	import type { Snippet } from "svelte"
	import { CloseIcon } from "../../icons/index.js"
	import Button from "../button/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		content: Snippet
		handleClose: () => void
	}

	let { class: className = "", content, handleClose, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.drawerHeader]: true
	})}
	{...rest}
>
	{@render content?.()}
	<Button variant="text" class={styles.buttonClose} onclick={handleClose}>
		<CloseIcon />
	</Button>
</div>
