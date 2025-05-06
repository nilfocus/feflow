export default function activeLineAction(node: HTMLElement) {
	const line = document.createElement("div")

	Object.assign(line.style, {
		position: "absolute",
		bottom: node.dataset.bottom || "0",
		height: node.dataset.lineHeight || "3px",
		backgroundColor: node.dataset.lineColor || "#1e88e5",
		transition: "left 0.25s ease",
		zIndex: "0"
	})

	node.style.position = "relative"
	node.appendChild(line)

	let activeElement: HTMLElement | null = null

	function update() {
		if (!activeElement) {
			line.style.width = "0"
			return
		}

		const { offsetLeft, offsetWidth } = activeElement
		line.style.left = `${offsetLeft}px`
		line.style.width = `${offsetWidth}px`
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
		activeElement = childElements[0]
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
