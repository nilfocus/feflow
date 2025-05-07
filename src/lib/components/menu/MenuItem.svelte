<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./MenuItem.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.menuItem]: true
	})}
	{...rest}
>
	{@render children?.()}
</div>
