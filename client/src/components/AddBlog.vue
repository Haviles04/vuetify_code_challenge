<template>
  <v-dialog
    max-width="500"
  >
    <template #activator="{ props: activatorProps }">
      <v-container class="d-flex justify-center">
        <v-btn
          v-bind="activatorProps"
          color="primary"
          text="Add Blog"
          variant="flat"
        />
      </v-container>
    </template>

    <template #default="{ isActive }">
      <v-card title="Add Blog">
        <v-form class="pa-4">
          <v-text-field
            v-model="blog.title"
            label="Title"
            required
          />
          <v-text-field
            v-model="blog.author"
            label="Author"
            required
          />
          <v-textarea
            v-model="blog.text"
            label="Text"
            required
          />
        </v-form>

        <v-card-actions>
          <v-btn
            text="Add Blog"
            @click="addBlog"
          />
          <v-btn
            text="Close"
            @click="() => (isActive.value = false)"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const blog = ref({ title: "", author: "", text: "" });

const emit = defineEmits(["handleError"]);

const addBlog = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/addblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog.value),
    });
      if (res.ok) {        
          const { blog } = await res.json();
          router.push(`/blog/${blog.id}`)
    }
  } catch {
    emit('handleError', 'Error while trying to add a blog, please try again later');
  }
};
</script>
