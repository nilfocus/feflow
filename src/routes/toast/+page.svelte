<script lang="ts">
	import { Button, States } from "@/lib/index.js"

	const _toastState = States.toastState()
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
