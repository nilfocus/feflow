<script lang="ts">
	import type {
		HTMLAttributeAnchorTarget,
		HTMLAttributes
	} from "svelte/elements"
	import styles from "./CarouselItem.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		href?: string | undefined | null
		target?: HTMLAttributeAnchorTarget | undefined | null
	}

	let {
		class: className = "",
		href,
		target,
		children,
		...rest
	}: Props = $props()
</script>

{#if href}
	<a
		aria-label="carouselItem"
		{href}
		{target}
		style="
		position: absolute;
		inset: 0;
		z-index: 1;
		display: block;
		"
	></a>
{/if}

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.carouselItem)}
>
	{@render children?.()}
</div>
