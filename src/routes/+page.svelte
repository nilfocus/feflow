<script lang="ts">
	import {
		Accordion,
		Avatar,
		Badge,
		BottomSheet,
		Button,
		Card,
		Checkbox,
		Input,
		InputNumber,
		InputPassword,
		InputSearch,
		States
	} from "@/lib/index.js"

	const _toastState = States.toastState()

	let count = $state(0)

	let openBottomSheet = $state(false)

	function increment() {
		count++
	}

	function decrement() {
		count--
	}
</script>

<h1>Welcome</h1>
<br />

<BottomSheet
	isOpen={openBottomSheet}
	handleClose={() => {
		openBottomSheet = false
	}}
>
	<h1>test</h1>
</BottomSheet>

<div class="content">
	<Button disabled>Disabled</Button>
	<Checkbox checked />
	<Checkbox />
	<Card>
		<h2>test card</h2>
	</Card>
	<Button
		onclick={() => {
			openBottomSheet = !openBottomSheet
		}}
	>
		Open BottomSheet
	</Button>
	<Avatar textFallback="test" />
	<Accordion label="test" isOpen={true}>
		<span>test</span>
	</Accordion>
	<InputPassword />
	<Input label="test" />
	<InputSearch variant="contained" placeholder="test" />
	<InputSearch placeholder="test" />
	<InputSearch variant="outlined" placeholder="test" />

	<InputNumber value={count} {increment} {decrement} />
	<Badge size="lg">{count}</Badge>
	<Button variant="outlined" onclick={decrement}>decrement (-)</Button>
	<Button variant="contained" onclick={increment}>increment (+)</Button>

	<br />

	<Button
		onclick={() => {
			_toastState.add({ message: "test", color: "error" })
		}}
	>
		Toast
	</Button>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 200px;
		gap: 1rem;
	}
</style>
