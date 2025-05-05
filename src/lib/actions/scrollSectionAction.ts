import { scrollSectionState } from "../states/index.js"

type Props = { debounceDelay?: number }

function debounce<T extends (...args: any[]) => void>(
	func: T,
	wait: number
): T {
	let timeout: ReturnType<typeof setTimeout> | null = null
	return ((...args: any[]) => {
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}) as T
}

export default function scrollSectionAction(node: HTMLElement, props?: Props) {
	const { debounceDelay = 50 } = props ?? {}
	const state = scrollSectionState()

	state.register(node, node.id)

	const handleScroll = () => {
		let closest = { reference: "", top: Infinity }

		for (const { node: sectionNode, reference } of state.data.sections) {
			const top = Math.abs(sectionNode.getBoundingClientRect().top)
			if (top < closest.top) {
				closest = { reference, top }
			}
		}

		if (closest.reference !== state.data.currentReference) {
			state.data.currentReference = closest.reference
		}
	}

	let debouncedScroll = debounce(handleScroll, debounceDelay)
	document.addEventListener("scroll", debouncedScroll, true)

	return {
		destroy() {
			document.removeEventListener("scroll", debouncedScroll, true)
			state.unregister(node.id)
		}
	}
}
