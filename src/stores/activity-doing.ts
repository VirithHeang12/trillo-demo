import { defineStore } from 'pinia'
import { useActivity } from '@/composables/useActivity'

export const useActivityDoingStore = defineStore(
	'activity-doing',
	() => {
		const activity = useActivity()

		return { activity }
	},
	{
		persist: {
			key: 'activity-doing',
			storage: localStorage,
		},
	},
)
