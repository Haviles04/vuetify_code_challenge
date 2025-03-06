<template>
  <v-container 
    max-width="750"
  >
    <template v-if="!blogs.length">
      <v-skeleton-loader 
        v-for="num in [1,2,3]"
        :key="num"
        type="article, divider"
        class="mb-4"
      />
    </template>
    <BlogSnippet
      v-for="blog in blogs"
      v-else
      :key="blog.id"
      :blog="blog"
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogSnippet from './BlogSnippet.vue';

const blogs = ref([]);
onMounted (async () => {
  try {
    const response = await fetch('http://localhost:1337/api/getallblogs');
    blogs.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }
})

</script>