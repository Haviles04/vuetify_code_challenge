<template>
  {{ blog.title }}
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const blog = ref({});

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