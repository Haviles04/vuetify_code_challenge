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
      <v-btn
        :to="`/blog/${blog.id}`"
        color="primary"
        elevated
      >
        View More
      </v-btn>
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