
<template>
  <figure class="list-item">
    <button class="mark-as-complete-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </button>
    <p>
      {{ activity.name }}
    </p>
    <button class="edit-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
        <path d="M11 1h2v2h-2z"></path>
        <path d="M4 4h16v16H4z"></path>
      </svg>
    </button>
  </figure>
</template>

<script setup lang="ts">
  defineProps({
    activity: {
      type: Object,
      required: true
    }
  });
</script>


<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>
