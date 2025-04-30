<template>
	<draggable v-model="activities" group="people" @start="drag = true" @end="drag = false" item-key="id">
		<template #item="{ element }">
			<ActivityListItem :activity="element" />
		</template>
	</draggable>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import draggable from 'vuedraggable';
	import ActivityListItem from '@/components/lists/ActivityListItem.vue';
	import type { Item } from '@/types/item';

	const activities = defineModel<Item[]>('activities');

	const drag = ref(false);


</script>
