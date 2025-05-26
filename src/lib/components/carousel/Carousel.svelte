<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Carousel.module.css"
	import { scrollNavigatorAction } from "../../actions/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		onChange?: (isFirst: boolean, isLast: boolean) => void
		actionRender: Snippet<[{ prev: () => void; next: () => void }]>
	}

	let {
		class: className = "",
		onChange,
		actionRender,
		children,
		...rest
	}: Props = $props()

	let _scrollNavigatorAction:
		| ReturnType<typeof scrollNavigatorAction>
		| undefined

	function setupNavigator(node: HTMLDivElement) {
		_scrollNavigatorAction = scrollNavigatorAction(node, { onChange })
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
	<div use:setupNavigator data-listeners={["keyboard"]} class={styles.content}>
		{@render children?.()}
	</div>
	{@render actionRender?.({ prev, next })}
</div>
