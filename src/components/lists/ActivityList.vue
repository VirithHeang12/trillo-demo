<template>
	Hi
</template>

<!-- <template>
	<div class="bg-gray-700 h-fit w-fit px-4">
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
	import { onMounted } from 'vue';

	const addActivity = () => {
		activityStore.add({
			id: Date.now(),
			name: 'New Activity',
			description: 'This is a new activity',
		});
	}

	activityStore.$subscribe((mutation, state) => {
		localStorage.setItem('activities', JSON.stringify(state.activities));
	});

	onMounted(() => {
		const activities = localStorage.getItem('activities');
		if (activities) {
			activityStore.initialize(JSON.parse(activities));
		}
	});

</script> -->
