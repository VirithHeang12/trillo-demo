<template>
  <div>
    <h1>My List</h1>
    <ul>
      <li v-for="activity in activities" :key="activity.id">
        <ActivityListItem :activity="activity" />
      </li>
    </ul>
    <button @click="addActivity">Add Activity</button>
  </div>
</template>

<script setup lang="ts">
  import ActivityListItem from '@/components/lists/ActivityListItem.vue';
  import { useActivityStore } from '@/stores/activity';

  const { activities, add } = useActivityStore();

  const addActivity = () => {
    add({
      id: Date.now(),
      name: 'New Activity',
      description: 'This is a new activity',
    });
  }

</script>


<style scoped></style>
