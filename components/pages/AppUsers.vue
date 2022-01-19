<template>
  <div class="main">
    <h1>Страница - "{{ $store.getters.currentRootPageName }}"</h1>
  </div>
</template>

<script>
export default {
  name: "Users",
  mounted() {
    this.$store.commit("setCurrentRootPageName", this.$route.path);
  },
};
</script>
