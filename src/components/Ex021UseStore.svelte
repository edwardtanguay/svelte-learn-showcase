<script lang="ts">
	import { appStore } from "../stores";

</script>

<div>
	<p>this site name capitalized is {$appStore.siteName.toUpperCase()}</p>
	<p>There are {$appStore.employees.length} employees.</p>
</div>
