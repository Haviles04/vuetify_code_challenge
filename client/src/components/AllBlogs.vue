<template>
  <v-container 
    max-width="750"
  >
    <section>
      <h2 class="text-h2 text-center mb-6">
        Welcome to my blog
      </h2>
      <AddBlog @handle-error="handleError" />
      <template v-if="loading">
        <v-skeleton-loader 
          v-for="num in [1,2,3]"
          :key="num"
          type="article, divider"
          class="mb-4"
        />
      </template>
      <p
        v-else-if="!loading && !blogs.length"
        class="text-center"
      >
        No blog post yet. Add your own!
      </p>
      <BlogSnippet
        v-for="blog in blogs"
        v-else
        :key="blog.id"
        :blog="blog"
      />
    </section>
  </v-container>
  <ErrorSnackbar 
    v-model="showSnackbar"
    :message="error"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogSnippet from './BlogSnippet.vue';

const loading = ref(false);
const error = ref("");
const showSnackbar = ref(false);
const blogs = ref([]);

const handleError = (message) => {
  showSnackbar.value = true;
  error.value = message;
}

onMounted (async () => {
  try {
    loading.value = true;
    const response = await fetch('http://localhost:1337/api/getallblogs');
    blogs.value = await response.json();
  } catch {
    handleError('Error Fetching Blogs, please try again later');
  } finally {
    loading.value = false;
  }
})

</script>