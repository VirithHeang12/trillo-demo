<template>
	<div class="list-container">
		<ul>
			<li v-for="activity in activityStore.activities" :key="activity.id">
				<ActivityListItem :activity="activity" />
			</li>
		</ul>
		<button @click="addActivity">Add Activity</button>
	</div>
</template>

<script setup lang="ts">
	import ActivityListItem from '@/components/lists/ActivityListItem.vue';
	import { useActivityStore } from '@/stores/activity';

	const activityStore = useActivityStore();

	const addActivity = () => {
		activityStore.add({
			id: Date.now(),
			name: 'New Activity',
			description: 'This is a new activity',
		});
	}

</script>


<style scoped>
	.list-container {
		width: 10rem;
		height: 10rem;
		border: 1px solid #ccc;
	}
</style>
