<script lang="ts">
	import { Wrapper, Button } from "@/lib/index.js"
</script>

<br />
<Wrapper
	id="one"
	onchange={(e) => {
		console.log(e.currentTarget.checked)
	}}
>
	<Button>test</Button>
</Wrapper>
