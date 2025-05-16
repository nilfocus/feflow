<script lang="ts">
	import type { ActionType } from "../../types/index.js"
	import { keyboardNavigationAction } from "../../actions/index.js"
	import Input from "../input/index.js"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	type DataType = {
		id: number
		label: string
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		data: DataType[]
		onInput?: (value: string) => void
		onSelect?: (value: DataType) => void
	}

	let { data, onInput, onSelect, ...rest }: Props = $props()

	let focusedItem = $state(-1)
	let inputValue = $state("")

	let filtered: typeof data = $state([])

	function handleSelect(item: DataType) {
		onSelect?.(item)
		focusedItem = -1
		filtered = []
		inputValue = ""
	}

	function handleFocusChange(focused: number) {
		focusedItem = focused
	}

	function handleOnInput(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement
		}
	) {
		const value = e.currentTarget.value.toLowerCase()
		inputValue = value
		onInput?.(value)

		const newData = data.filter((v) => {
			if (value.length === 0) return
			return v.label.toLowerCase().includes(value)
		})
		filtered = newData
	}
</script>

<div class={styles.autocomplete} {...rest}>
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

	<div class={styles.items}>
		{#each filtered as item, index}
			<div
				class={classMapUtil({
					[styles.focused]: focusedItem === index
				})}
			>
				<p>{item.label}</p>
			</div>
		{/each}
	</div>
</div>
