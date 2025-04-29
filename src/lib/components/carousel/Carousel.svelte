<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import scrollNavigationAction from "../../actions/scrollNavigationAction.js"
	import {
		KeyboardArrowLeftIcon,
		KeyboardArrowRightIcon
	} from "../../icons/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"
	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()

	let el: HTMLDivElement | null = null
	let navigationAction: ReturnType<typeof scrollNavigationAction> | undefined
	let isFirst = $state(true)
	let isLast = $state(false)

	function setupNavigation(node: HTMLDivElement) {
		navigationAction = scrollNavigationAction(node, {
			onChange(a, b) {
				isFirst = a
				isLast = b
			}
		})
		return navigationAction
	}

	function next() {
		if (navigationAction?.controls) {
			navigationAction.controls.next()
		}
	}

	function prev() {
		if (navigationAction?.controls) {
			navigationAction.controls.prev()
		}
	}
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.carousel]: true
	})}
	aria-label="carousel"
>
	<div bind:this={el} use:setupNavigation class={styles.content}>
		{@render children?.()}
	</div>
	<div class={styles.actions}>
		<Button
			variant="text"
			disabled={isFirst}
			onclick={prev}
			aria-label="Previous"
		>
			<KeyboardArrowLeftIcon height={"64px"} width={"64px"} />
		</Button>
		<Button variant="text" disabled={isLast} onclick={next} aria-label="Next">
			<KeyboardArrowRightIcon height={"64px"} width={"64px"} />
		</Button>
	</div>
</div>
