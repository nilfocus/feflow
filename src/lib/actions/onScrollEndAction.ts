export default function onScrollEndAction(
	node: HTMLElement,
	callback: () => void
) {
	function handleScroll() {
		const isAtBottom = node.scrollTop + node.clientHeight >= node.scrollHeight

		if (isAtBottom) {
			callback()
		}
	}

	node.addEventListener("scroll", handleScroll)

	return {
		destroy() {
			node.removeEventListener("scroll", handleScroll)
		}
	}
}
