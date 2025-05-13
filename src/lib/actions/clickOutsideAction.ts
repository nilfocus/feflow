type Props = {
	isOpen: boolean
	handler: () => void
	events?: (keyof DocumentEventMap)[]
}

export default function clickOutsideAction(node: HTMLElement, params: Props) {
	let { handler, events = ["mousedown"], isOpen } = params
	let overlay: HTMLDivElement | null = null

	const handle = (e: Event) => {
		const target = e.target as Node
		if (!node.contains(target)) {
			handler()
		}
	}

	const setupListeners = () => {
		events.forEach((event) => {
			document.addEventListener(event, handle)
		})
	}

	const removeListeners = () => {
		events.forEach((event) => {
			document.removeEventListener(event, handle)
		})
	}

	const addOverlay = () => {
		if (overlay || !isOpen) return
		const nodeZIndex = window.getComputedStyle(node).zIndex
		const baseZIndex = isNaN(Number(nodeZIndex)) ? 1 : Number(nodeZIndex)

		overlay = document.createElement("div")
		overlay.style.position = "fixed"
		overlay.style.top = "0"
		overlay.style.left = "0"
		overlay.style.width = "100vw"
		overlay.style.height = "100vh"
		overlay.style.zIndex = `${baseZIndex - 1}`
		overlay.style.background = "rgba(0, 0, 0, 0.5)"
		document.body.appendChild(overlay)
	}

	const removeOverlay = () => {
		if (overlay) {
			overlay.remove()
			overlay = null
		}
	}

	setupListeners()

	if (isOpen) addOverlay()

	return {
		update(newParams: Props) {
			const wasOpen = isOpen
			isOpen = newParams.isOpen
			handler = newParams.handler
			events = newParams.events ?? ["mousedown"]

			if (!wasOpen && isOpen) {
				addOverlay()
			} else if (wasOpen && !isOpen) {
				removeOverlay()
			}
		},
		destroy() {
			removeListeners()
			removeOverlay()
		}
	}
}
