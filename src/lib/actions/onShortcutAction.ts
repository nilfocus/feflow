type Props = {
	keys: string[]
	callback: (event: KeyboardEvent) => void
	preventDefault?: boolean
}

export default function onShortcutAction(
	_: HTMLElement,
	{ keys, callback, preventDefault = true }: Props
) {
	const pressed = new Set<string>()

	function normalizeKey(key: string) {
		return key.toLowerCase()
	}

	function onKeyDown(event: KeyboardEvent) {
		pressed.add(normalizeKey(event.key))

		const allMatch = keys.every((key) => pressed.has(normalizeKey(key)))

		if (allMatch) {
			if (preventDefault) {
				event.preventDefault()
			}

			callback(event)
		}
	}

	function onKeyUp(event: KeyboardEvent) {
		pressed.delete(normalizeKey(event.key))
	}

	window.addEventListener("keydown", onKeyDown)
	window.addEventListener("keyup", onKeyUp)

	return {
		destroy() {
			window.removeEventListener("keydown", onKeyDown)
			window.removeEventListener("keyup", onKeyUp)
		}
	}
}
