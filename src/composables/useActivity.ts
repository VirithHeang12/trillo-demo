import type { Item } from '@/types/item'
import { ref } from 'vue'

export const useActivity = () => {
	const activities = ref<Item[]>([
		{
			id: 1,
			name: 'Activity 1',
			description: 'Description of Activity 1',
		},
		{
			id: 2,
			name: 'Activity 2',
			description: 'Description of Activity 2',
		},
		{
			id: 3,
			name: 'Activity 3',
			description: 'Description of Activity 3',
		},
	])

	const add = (item: Item) => {
		activities.value.push(item)
	}

	const remove = (item: Item) => {
		const index = activities.value.indexOf(item)
		if (index > -1) {
			activities.value.splice(index, 1)
		}
	}

	const clear = () => {
		activities.value = []
	}

	const getList = () => {
		return activities.value
	}

	const initialize = (items: Item[]) => {
		activities.value = items
	}

	return { activities, add, remove, clear, getList, initialize }
}
