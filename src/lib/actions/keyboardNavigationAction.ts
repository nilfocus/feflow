type Props<T> = {
	data: T[]
	onSelect: (item: T) => void
	onFocusChange?: (focused: number) => void
}

export default function keyboardNavigationAction<T>(
	node: HTMLElement,
	{ data, onSelect, onFocusChange }: Props<T>
) {
	let focused = -1

	function handleKeyDown(e: KeyboardEvent) {
		if (!data.length) return

		if (e.key === "ArrowDown") {
			e.preventDefault()
			focused = (focused + 1) % data.length
			onFocusChange?.(focused)
		}

		if (e.key === "ArrowUp") {
			e.preventDefault()
			focused = (focused + data.length - 1) % data.length
			onFocusChange?.(focused)
		}

		if (e.key === "Escape") {
			e.preventDefault()
			focused = -1
			onFocusChange?.(focused)
		}

		if (e.key === "Enter") {
			e.preventDefault()
			if (data[focused]) {
				onSelect(data[focused])

				const child = node.children[focused] as HTMLElement
				child?.click()
				
				focused = -1
				onFocusChange?.(focused)
			}
		}
	}

	node.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("keydown", handleKeyDown)
		}
	}
}
