<template>
	<div class="flex pl-10 pt-10 gap-2 h-[100vh] w-[100vw] bg-indigo-300">
		<DragDrop v-model:activities="activityTodoStore.activity.activities" />
		<DragDrop v-model:activities="activityDoingStore.activity.activities" />
		<ActivityList />
	</div>
</template>

<script setup lang="ts">
	import ActivityList from '@/components/lists/ActivityList.vue'
	import DragDrop from '@/components/DragDrop.vue';
	import { useActivityTodoStore } from '@/stores/activity-todo';
	import { useActivityDoingStore } from '@/stores/activity-doing';

	const activityTodoStore = useActivityTodoStore();
	const activityDoingStore = useActivityDoingStore();
</script>
