<template>
  <v-dialog
    max-width="500"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="error"
        text="Delete Blog"
        variant="flat"
        class="mt-4 ml-4"
      />
    </template>
  
    <template #default="{ isActive }">
      <v-card title="Delete Blog">
        <v-card-text>
          This action is permanent, Are you sure you want to delete this blog?
        </v-card-text>
        <v-card-actions>
          <v-btn
            text="Delete"
            color="error"
            @click="deleteBlog"
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
  import { useRouter } from 'vue-router';
const router = useRouter();

  const emit = defineEmits(['error']);
const props = defineProps({
    id: {
        type: Number,
        required : true
    }
})


    const deleteBlog = async () => {
    try {
      const res = await fetch(`http://localhost:1337/api/deleteblog/${props.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
          router.push('/');
      } else {
        throw new Error()
      }
    }
    catch {
      emit('error', 'Error deleting blog, please try again later');
    }
  }
  </script>