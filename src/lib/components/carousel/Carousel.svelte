<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import { scrollNavigatorAction } from "../../actions/index.js"
	import {
		KeyboardArrowLeftIcon,
		KeyboardArrowRightIcon
	} from "../../icons/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Button from "../button/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()

	let _scrollNavigatorAction:
		| ReturnType<typeof scrollNavigatorAction>
		| undefined
	let isFirst = $state(true)
	let isLast = $state(false)

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node, {
			onChange(a, b) {
				isFirst = a
				isLast = b
			}
		})
		return _scrollNavigatorAction
	}

	function next() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.next()
		}
	}

	function prev() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.prev()
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
	<div use:setupNavigator class={styles.content}>
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
