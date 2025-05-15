type Props = {
	isOpen: boolean
	handler: () => void
	events?: (keyof DocumentEventMap)[]
}

export default function clickOutsideAction(node: HTMLElement, params: Props) {
	let { handler, events = ["mousedown"], isOpen } = params

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

	setupListeners()

	return {
		update(newParams: Props) {
			const wasOpen = isOpen
			isOpen = newParams.isOpen
			handler = newParams.handler
			events = newParams.events ?? ["mousedown"]
		},
		destroy() {
			removeListeners()
		}
	}
}
