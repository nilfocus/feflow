<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import { scrollNavigatorAction } from "../../actions/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		actions: Snippet<
			[
				{
					prev: () => void
					next: () => void
					isFirst?: boolean
					isLast?: boolean
				}
			]
		>
	}

	let { class: className = "", children, actions, ...rest }: Props = $props()

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

	function prev() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.prev()
		}
	}

	function next() {
		if (_scrollNavigatorAction?.controls) {
			_scrollNavigatorAction.controls.next()
		}
	}
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.carousel)}
	aria-label="carousel"
>
	<div use:setupNavigator class={styles.content}>
		{@render children?.()}
	</div>
	{@render actions?.({ prev, next, isFirst, isLast })}
</div>
