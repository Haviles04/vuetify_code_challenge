<template>
  <v-snackbar
    v-model="showSnackbar"
    multi-line
    color="error"
  >
    <p class="text-center">
      {{ props.message }}
    </p>
  </v-snackbar>
</template>

<script setup>

const showSnackbar = defineModel({
    type: Boolean
});

const props = defineProps({
    message: {
        type: String,
        default: ""
    }
    })
</script>