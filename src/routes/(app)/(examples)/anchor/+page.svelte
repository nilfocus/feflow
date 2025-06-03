<script lang="ts">
	import { Anchor, Button } from "@/lib/index.js"
</script>

<br />
<Anchor
	id="one"
	onchange={(e) => {
		console.log(e.currentTarget.checked)
	}}
>
	<Button>test</Button>
</Anchor>
