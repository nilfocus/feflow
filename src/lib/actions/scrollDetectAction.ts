type Props = {
	handler: (visible: boolean) => void
	disabled?: boolean
}

export default function scrollDetectAction(
	node: HTMLElement,
	{ handler, disabled = false }: Props
) {
	if (typeof window === "undefined") {
		return { destroy: () => {} }
	}

	function checkScroll() {
		const { scrollLeft, clientWidth, scrollWidth } = node
		const isRightVisible = scrollLeft + clientWidth < scrollWidth - 1
		handler(isRightVisible)
	}

	let timeout: ReturnType<typeof setTimeout> | undefined

	function checkScrollDebounced() {
		clearTimeout(timeout)
		timeout = setTimeout(checkScroll, 50)
	}

	window.addEventListener("resize", checkScroll)
	node.addEventListener("scroll", checkScrollDebounced)

	checkScroll()

	return {
		update(params: {
			handler: (visible: boolean) => void
			disabled?: boolean
		}) {
			disabled = params.disabled ?? false
			handler = params.handler
			checkScroll()
		},
		destroy() {
			window.removeEventListener("resize", checkScroll)
			node.removeEventListener("scroll", checkScrollDebounced)
		}
	}
}
