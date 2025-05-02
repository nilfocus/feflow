import type { ActionEntry } from "../types/index.js"

export default function useActionUtil<T extends HTMLElement>(
	node: T,
	actionsList: ActionEntry<T>[] = []
) {
	let destroyFns: (() => void)[] = []

	function applyActions(list: ActionEntry<T>[]) {
		destroyFns = list
			.map(([action, params]) => {
				const result = action(node, params)
				return result?.destroy
			})
			.filter((destroy): destroy is () => void => typeof destroy === "function")
	}

	applyActions(actionsList)

	return {
		update(newList: ActionEntry<T>[]) {
			destroyFns.forEach((fn) => fn())
			applyActions(newList)
		},
		destroy() {
			destroyFns.forEach((fn) => fn())
		}
	}
}
