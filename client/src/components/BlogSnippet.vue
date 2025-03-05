<template>
  <v-card 
    :key="blog.id"
    class="mb-4"
  >
    <v-card-title>
      {{ blog.title }}
    </v-card-title>
    <v-card-text>
      {{ blog.text }}
    </v-card-text>

    <v-card-actions>
      <v-btn>
        <router-link
          :to="`/blog/${blog.id}`"
        >
          View More
        </router-link>
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