<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements"
	import type { VariantType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Accordion.module.css"
	import Button from "../button/index.js"

	interface Props extends HTMLButtonAttributes {
		isOpen: boolean
		label: string
		variant?: VariantType
	}

	let {
		class: className = "",
		isOpen,
		label,
		variant = "contained",
		children,
		...rest
	}: Props = $props()
</script>

<div class={styles.accordion}>
	<Button
		{...rest}
		class={classMapUtil({
			[styles.active]: isOpen
		})}
		{variant}
	>
		{label}
	</Button>
	<div
		class={classMapUtil({
			[styles.content]: true,
			[styles.active]: isOpen
		})}
	>
		{@render children?.()}
	</div>
</div>
