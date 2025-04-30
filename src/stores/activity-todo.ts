import { useActivity } from '@/composables/useActivity'
import { defineStore } from 'pinia'

export const useActivityTodoStore = defineStore(
	'activity-todo',
	() => {
		const activity = useActivity()

		return { activity }
	},
	{
		persist: {
			key: 'activity-todo',
			storage: localStorage,
		},
	},
)
