type Props = {
	onScroll: (isVisible: boolean) => void
	threshold?: number
}

export default function stickyOnScrollAction(
	node: HTMLElement,
	{ onScroll, threshold = 0 }: Props
) {
	let observer: IntersectionObserver

	const handleIntersect: IntersectionObserverCallback = ([entry]) => {
		onScroll(entry.isIntersecting)
	}

	observer = new IntersectionObserver(handleIntersect, {
		root: null,
		threshold
	})

	observer.observe(node)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}
