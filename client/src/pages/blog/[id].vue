<template>
  <section>
    <v-skeleton-loader v-if="!blog.title" />
    <v-container 
      v-else
      max-width="750"
    >
      <h2 class="text-h2 mb-4">
        {{ blog.title }}
      </h2>
      <div class="d-flex justify-space-between mb-2">
        <p>Written by: {{ blog.author }}</p>
        <p>{{ new Date(blog.updatedAt).toDateString() }}</p>
      </div>
      <v-divider />
      <v-sheet
        :height="200"
        class="pa-4"
        elevated
      >
        <p>{{ blog.text }}</p>
      </v-sheet>
      <UpdateBlog
        :blog="blog"
        @update="updateBlog"
      />
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const blog = ref({});

const updateBlog = (updatedBlog) => {
    blog.value = updatedBlog;
}

onMounted(async () => {
    try {
        const res = await fetch(`http://localhost:1337/api/getblog/${id}`);
        const blogData = await res.json();
        blog.value = blogData
    } catch (err) {
        console.log(err);
    }
})
</script>