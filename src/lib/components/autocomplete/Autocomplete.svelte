<script lang="ts" generics="T">
	import type { ActionType } from "../../types/index.js"
	import { keyboardNavigationAction } from "../../actions/index.js"
	import Input from "../input/index.js"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"
	import type { Snippet } from "svelte"

	interface Props<T> extends HTMLAttributes<HTMLDivElement> {
		data: T[]
		filter: (item: T) => string
		onSelect?: (value: T) => void
		renderInput: Snippet<[T, () => void]>
	}

	let { data, filter, onSelect, renderInput, ...rest }: Props<T> = $props()

	let currentIndex = $state(-1)
	let inputValue = $state("")

	let filtered: typeof data = $state([])

	function clear() {
		currentIndex = -1
		filtered = []
		inputValue = ""
	}

	function handleSelect(item: T) {
		onSelect?.(item)
		clear()
	}

	function handleFocusChange(index: number) {
		currentIndex = index
	}

	function handleOnInput(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement
		}
	) {
		const value = e.currentTarget.value.toLowerCase()
		inputValue = value

		const newData = data.filter((item) => {
			if (value.length === 0) return
			return filter(item).toLowerCase().includes(value)
		})
		filtered = newData
	}
</script>

<div {...rest} class={styles.autocomplete}>
	<Input
		actions={[
			[
				keyboardNavigationAction as ActionType<HTMLElement>,
				{
					data: $state.snapshot(filtered),
					onSelect: handleSelect,
					onFocusChange: handleFocusChange
				}
			]
		]}
		oninput={handleOnInput}
		value={inputValue}
	/>

	<div class={styles.content}>
		{#each filtered as item, index}
			<div
				class={classMapUtil(styles.item, {
					[styles.focused]: currentIndex === index
				})}
			>
				{@render renderInput?.(item, clear)}
			</div>
		{/each}
	</div>
</div>
