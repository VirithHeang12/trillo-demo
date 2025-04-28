import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Item } from '@/types/item'

export const useActivityStore = defineStore('activity', () => {
  const activities = ref<Item[]>([
    {
      id: 1,
      name: 'Item 1',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for Item 3',
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

  return { activities, add, remove, clear, getList }
})
