<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./MenuItem.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil(className, [className, styles], styles.menuItem)}
	{...rest}
>
	{@render children?.()}
</div>
