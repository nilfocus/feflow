<script lang="ts">
	import type { ActionType } from "../../types/index.js"
	import { keyboardNavigationAction } from "../../actions/index.js"
	import Input from "../input/index.js"
	import styles from "./Autocomplete.module.css"
	import { classMapUtil } from "../../utils/index.js"

	let focusedItem = $state(-1)

	let filtered = [
		{ id: 1, title: "Item 1" },
		{ id: 2, title: "Item 2" },
		{ id: 3, title: "Item 3" },
		{ id: 4, title: "Item 4" }
	]

	function handleSelect(item: string) {
		console.log(item)
	}

	function handleFocusChange(focused: number) {
		console.log(focused)
		focusedItem = focused
	}
</script>

<div class={styles.autocomplete}>
	<Input
		actions={[
			[
				keyboardNavigationAction as ActionType<HTMLElement>,
				{
					data: filtered,
					onSelect: handleSelect,
					onFocusChange: handleFocusChange
				}
			]
		]}
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
