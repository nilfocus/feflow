<script lang="ts">
	import { Actions, Card } from "@/lib/index.js"
</script>

<Card>
	<h2>test1</h2>
</Card>

<div use:Actions.glowOnHoverAction>
	<Card>
		<h2>test2</h2>
	</Card>
</div>
