<script lang="ts">
	import { Button, toastState } from "@/lib/index.js"

	const _toastState = toastState()
</script>

<Button
	onclick={() => {
		_toastState.add({ message: "test", color: "error" })
	}}
>
	Error
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", color: "success" })
	}}
>
	Success
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", color: "warning" })
	}}
>
	Warning
</Button>

<br />
<br />

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "top-left" })
	}}
>
	Top-Left
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "bottom-left" })
	}}
>
	Bottom-Left
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "top-right" })
	}}
>
	Top-Right
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "bottom-right" })
	}}
>
	Bottom-Right
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "bottom-center" })
	}}
>
	Bottom-Center
</Button>

<Button
	onclick={() => {
		_toastState.add({ message: "test", position: "top-center" })
	}}
>
	Top-Center
</Button>

<br />
<br />

<Button
	onclick={() => {
		_toastState.add({ message: "test", duration: 5000 })
	}}
>
	Duration: 5000
</Button>
