<template>
  <div class="survay">
    <h1>Страница - "{{ $store.getters.currentRootPageName }}"</h1>
  </div>
</template>

<script>
export default {
  name: "Blacklists",
  mounted() {
    this.$store.commit("setCurrentRootPageName", this.$route.path);
  },
};
</script>
