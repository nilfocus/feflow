type Props = {
	onChange?: (isFirst: boolean, isLast: boolean) => void
}

export default function scrollNavigationAction(
	node: HTMLElement,
	props: Props = {}
) {
	const { onChange } = props ?? {}

	let idx = 0
	const childs = Array.from(node.children)
	const totalChilds = childs.length

	function update() {
		onChange?.(idx === 0, idx === totalChilds - 1)
	}

	const controls = {
		next: () => {
			if (idx < totalChilds - 1) {
				idx++
				node.scrollBy({ left: node.clientWidth, behavior: "smooth" })
				update()
			}
		},
		prev: () => {
			if (idx > 0) {
				idx--
				node.scrollBy({ left: -node.clientWidth, behavior: "smooth" })
				update()
			}
		},
		goTo: (index: number) => {
			if (index >= 0 && index < totalChilds && index !== idx) {
				idx = index
				const scrollAmount = index * node.clientWidth - node.scrollLeft
				node.scrollBy({ left: scrollAmount, behavior: "smooth" })
				update()
			}
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === "ArrowRight") {
			controls.next()
			event.preventDefault()
		} else if (event.key === "ArrowLeft") {
			controls.prev()
			event.preventDefault()
		}
	}

	window.addEventListener("keydown", handleKeyDown)

	update()

	return {
		update(newProps: Props) {
			props = newProps
			update()
		},
		destroy() {
			window.removeEventListener("keydown", handleKeyDown)
		},
		controls
	}
}
