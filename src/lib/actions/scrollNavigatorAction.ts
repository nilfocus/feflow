type Props = {
	onChange?: (isFirst: boolean, isLast: boolean) => void
}

export default function scrollNavigatorAction(
	node: HTMLElement,
	props: Props = {}
) {
	function update() {
		const isFirst = node.scrollLeft === 0
		const isLast = node.scrollLeft + node.clientWidth >= node.scrollWidth - 2
		props.onChange?.(isFirst, isLast)
	}

	function getNextElement() {
		const children = Array.from(node.children) as HTMLElement[]
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft === 0 && children.length > 1) {
			return children[1]
		}

		for (const child of children) {
			if (child.offsetLeft > scrollLeft + scrollWidth) {
				return child
			}
		}
		return children[children.length - 1]
	}

	function getPrevElement() {
		const children = Array.from(node.children) as HTMLElement[]
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft < scrollWidth && children.length > 0) {
			return children[0]
		}

		for (let i = children.length - 1; i >= 0; i--) {
			if (children[i].offsetLeft < scrollLeft - scrollWidth / 2) {
				return children[i]
			}
		}
		return children[0]
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
			const children = Array.from(node.children) as HTMLElement[]
			const clampedIndex = Math.max(0, Math.min(index, children.length - 1))
			scrollToElement(children[clampedIndex])
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
	requestAnimationFrame(update)

	return {
		destroy() {
			node.removeEventListener("scroll", update)
			window.removeEventListener("keydown", handleKeyDown)
		},
		controls
	}
}
