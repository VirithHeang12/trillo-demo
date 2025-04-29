<template>
	<div id="main">
		<ActivityList />
		<ActivityList />
	</div>
</template>

<script setup lang="ts">
	import ActivityList from '@/components/lists/ActivityList.vue'
</script>

<style scoped>
	#main {
		display: flex;
		height: 100vh;
		width: 100vw;
		background-color: #f0f0f0;
	}
</style>
