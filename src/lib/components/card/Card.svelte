<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Card.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.card]: true
	})}
	{...rest}
>
	{@render children?.()}
</div>
