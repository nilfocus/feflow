<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputNumber.module.css"
	import Button from "../button/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		increment: () => void
		decrement: () => void
		disableIncrement?: boolean
		disableDecrement?: boolean
	}

	let {
		class: className = "",
		increment,
		decrement,
		disableIncrement = false,
		disableDecrement = false,
		...rest
	}: Props = $props()
</script>

<div class={classMapUtil(className, [styles, className], styles.inputNumber)}>
	<div class={styles.numberControl}>
		<Button disabled={disableDecrement} onclick={decrement}>-</Button>
		<Button disabled={disableIncrement} onclick={increment}>+</Button>
	</div>
	<input type="number" {...rest} />
</div>
