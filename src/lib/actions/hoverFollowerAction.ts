import type { OrientationType } from "../types/index.js"

export default function hoverFollowerAction(
	node: HTMLElement,
	orientation?: OrientationType
) {
	const childs = Array.from(node.children)

	let overlay = childs[0] as HTMLDivElement

	if (orientation === "vertical") {
		overlay.style.transition =
			"transform 0.3s ease, height 0.3s ease, opacity 0.2s ease"
	} else {
		overlay.style.transition =
			"transform 0.3s ease, width 0.3s ease, height 0.3s ease, opacity 0.2s ease"
	}

	function handleEnter(el: HTMLElement) {
		const containerRect = node.getBoundingClientRect()
		const elRect = el.getBoundingClientRect()

		if (orientation === "vertical") {
			const offset = elRect.top - containerRect.top
			const height = elRect.height
			overlay.style.transform = `translateY(${offset}px)`
			overlay.style.height = `${height}px`
		} else {
			const offsetY = elRect.top - containerRect.top
			const offsetX = elRect.left - containerRect.left

			overlay.style.width = `${elRect.width}px`
			overlay.style.height = `${elRect.height}px`
			overlay.style.transform = `translate(${offsetX}px, ${offsetY}px)`
		}

		overlay.style.opacity = "1"
	}

	function handleLeave() {
		overlay.style.opacity = "0"
	}

	function handler(element: HTMLElement) {
		element.style.position = "relative"

		element.addEventListener("mouseenter", () => {
			handleEnter(element)
		})

		element.addEventListener("mouseleave", () => {
			handleLeave()
		})
	}

	childs.slice(1).forEach((node) => {
		handler(node as HTMLElement)

		Array.from(node.children).forEach((node) => {
			handler(node as HTMLElement)
		})
	})

	return {
		destroy() {
			childs.forEach((node) => {
				const element = node as HTMLElement

				element.removeEventListener("mouseenter", () => {
					handleEnter(element)
				})

				element.removeEventListener("mouseleave", () => {
					handleLeave()
				})
			})
		}
	}
}
