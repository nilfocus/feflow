import type { OrientationType } from "../types/orientation.types.js"

type Props = {
	firstChildIndex?: number
	orientation?: OrientationType
}

export default function activeLineAction(node: HTMLElement, props?: Props) {
	const { firstChildIndex = 0, orientation = "horizontal" } = props ?? {}

	const line = document.createElement("div")

	Object.assign(line.style, {
		position: "absolute",
		backgroundColor: node.dataset.lineColor || "#1e88e5",
		transition:
			orientation === "horizontal"
				? "left 0.25s ease, width 0.25s ease"
				: "top 0.25s ease, height 0.25s ease",
		zIndex: "0"
	})

	if (orientation === "horizontal") {
		line.style.bottom = node.dataset.bottom || "0"
		line.style.height = node.dataset.lineHeight || "3px"
	} else {
		line.style.left = node.dataset.left || "0"
		line.style.width = node.dataset.lineWidth || "3px"
	}

	node.style.position = "relative"
	node.appendChild(line)

	let activeElement: HTMLElement | null = null

	function update() {
		if (!activeElement) {
			if (orientation === "horizontal") {
				line.style.width = "0"
			} else {
				line.style.height = "0"
			}
			return
		}

		if (orientation === "horizontal") {
			line.style.left = `${activeElement.offsetLeft}px`
			line.style.width = `${activeElement.offsetWidth}px`
		} else {
			line.style.top = `${activeElement.offsetTop}px`
			line.style.height = `${activeElement.offsetHeight}px`
		}
	}

	function handleClick(event: Event) {
		const target = event.target as HTMLElement

		if (target.parentElement === node && target !== line) {
			activeElement = target
			update()
		}
	}

	node.addEventListener("click", handleClick)

	const childElements = Array.from(node.children).filter(
		(el) => el !== line
	) as HTMLElement[]

	if (childElements.length > 0) {
		activeElement = childElements[firstChildIndex]
		update()
	}

	window.addEventListener("resize", update)

	return {
		update,
		setActive(element: HTMLElement) {
			if (element.parentElement === node) {
				activeElement = element
				update()
			}
		},
		destroy() {
			line.remove()
			node.removeEventListener("click", handleClick)
			window.removeEventListener("resize", update)
		}
	}
}
