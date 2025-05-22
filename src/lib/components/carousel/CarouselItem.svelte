<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./CarouselItem.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.carouselItem)}
>
	{@render children?.()}
</div>
