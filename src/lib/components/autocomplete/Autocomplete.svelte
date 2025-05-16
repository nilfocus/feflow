<script lang="ts">
	import type { ActionType } from "../../types/index.js"
	import { keyboardNavigationAction } from "../../actions/index.js"
	import Input from "../input/index.js"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "../../utils/index.js"

	let focusedItem = $state(-1)
	let inputValue = $state("")

	const data = [
		{ id: 1, title: "Item 1" },
		{ id: 2, title: "Item 2" },
		{ id: 3, title: "Item 3" },
		{ id: 4, title: "Item 4" }
	]

	let filtered: typeof data = $state([])

	function handleSelect(item: string) {
		console.log(item)
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

		const newData = data.filter((v) => {
			if (value.length === 0) return
			return v.title.toLowerCase().includes(value)
		})
		filtered = newData
	}
</script>

<div class={styles.autocomplete}>
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
				<p>{item.title}</p>
			</div>
		{/each}
	</div>
</div>
