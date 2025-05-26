type Props = {
	onChange?: (isFirst: boolean, isLast: boolean) => void
}

export default function scrollNavigatorAction(
	node: HTMLElement,
	props: Props = {}
) {
	function getChilds() {
		return Array.from(node.children) as HTMLElement[]
	}

	function isFirst(node: HTMLElement) {
		return node.scrollLeft === 0
	}

	function isLast(node: HTMLElement) {
		return node.scrollLeft + node.clientWidth >= node.scrollWidth - 2
	}

	function update() {
		props.onChange?.(isFirst(node), isLast(node))
	}

	function getNextElement() {
		const childs = getChilds()
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft === 0 && childs.length > 1) {
			return childs[1]
		}

		for (const child of childs) {
			if (child.offsetLeft > scrollLeft + scrollWidth) {
				return child
			}
		}
		return childs[childs.length - 1]
	}

	function getPrevElement() {
		const childs = getChilds()
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft < scrollWidth && childs.length > 0) {
			return childs[0]
		}

		for (let i = childs.length - 1; i >= 0; i--) {
			if (childs[i].offsetLeft < scrollLeft - scrollWidth / 2) {
				return childs[i]
			}
		}
		return childs[0]
	}

	function scrollToElement(element: HTMLElement) {
		if (element) {
			const isFirst = element === node.firstElementChild
			node.scrollTo({
				left: isFirst ? 0 : element.offsetLeft,
				behavior: "smooth"
			})

			setTimeout(update, 250)
		}
	}

	const controls = {
		next: () => scrollToElement(getNextElement()),
		prev: () => scrollToElement(getPrevElement()),
		goTo: (index: number) => {
			const childs = getChilds()
			const clampedIndex = Math.max(0, Math.min(index, childs.length - 1))
			scrollToElement(childs[clampedIndex])
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowRight") {
			controls.next()
			e.preventDefault()
		} else if (e.key === "ArrowLeft") {
			controls.prev()
			e.preventDefault()
		}
	}

	node.addEventListener("scroll", update, { passive: true })
	window.addEventListener("keydown", handleKeyDown)
	window.addEventListener("resize", update)

	requestAnimationFrame(update)

	return {
		destroy() {
			node.removeEventListener("scroll", update)
			window.removeEventListener("keydown", handleKeyDown)
			window.removeEventListener("resize", update)
		},
		controls
	}
}
