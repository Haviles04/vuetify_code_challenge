<template>
  <v-card 
    :key="blog.id"
    class="mb-4"
  >
    <v-card-title>
      {{ blog.title }}
    </v-card-title>
    <v-card-subtitle>
      By: {{ blog.author }}
    </v-card-subtitle>
    <v-card-text>
      {{ blog.text.slice(0, 250) }}...
    </v-card-text>

    <v-card-actions>
      <router-link
        :to="`/blog/${blog.id}`"
        class="v-btn v-btn--flat v-btn--text"
      >
        View More
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
    blog: {
        type: Object,
        required: true
    }  
    })
</script>