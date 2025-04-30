<script lang="ts">
	import {
		Input,
		InputNumber,
		InputPassword,
		InputSearch
	} from "@/lib/index.js"
</script>

<InputPassword />
<Input label="test" />
<InputSearch variant="contained" placeholder="test" />
<InputSearch placeholder="test" />
<InputSearch variant="outlined" placeholder="test" />
<InputNumber increment={() => {}} decrement={() => {}} />
