<template>
  <div class="alert alert-warning" role="alert" v-if="message.show">
    <i class="bi bi-exclamation-triangle-fill"></i> {{ message.message }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Message",
  computed: {
    ...mapState({ message: state => state.notification.message })
  }
};
</script>
