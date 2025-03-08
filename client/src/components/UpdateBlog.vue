<template>
  <v-dialog
    max-width="500"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="primary"
        text="Update Blog"
        variant="flat"
        class="mt-4"
      />
    </template>

    <template #default="{ isActive }">
      <v-card title="Update Blog">
        <v-form class="pa-4">
          <v-text-field
            v-model="formBlog.title"
            label="Title"
            required
          />
          <v-text-field
            v-model="formBlog.author"  
            label="Author"
            required
          />
          <v-textarea
            v-model="formBlog.text"  
            label="Text"
            required
          />
        </v-form>

        <v-card-actions>
          <v-btn
            text="Update"
            @click="updateBlog(isActive)"
          />
          <v-btn
            text="Close"
            @click="() => isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})

const formBlog = ref({ ...props.blog });
const emit = defineEmits(["update", "error"]);

const updateBlog = async (isActive) => {
  try {
    const res = await fetch('http://localhost:1337/api/updateblog', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formBlog.value)
    })
    if (res.ok) {
      emit("update", { ...formBlog.value });
      isActive.value = false;
    } else {
      throw new Error();
    }
  }
  catch {
    emit('error', 'Error updating blog, please try again later');
  }
}
</script>