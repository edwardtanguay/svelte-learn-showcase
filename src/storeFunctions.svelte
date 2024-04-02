<script lang="ts">
	import { appStore } from "./stores";

	export const removeEmployee = () => {
		const _appStore = structuredClone($appStore);
		_appStore.employees.pop();
		$appStore = structuredClone(_appStore);
	};
</script>
