<template>
  <div>
    <TheSidebar />
    <div class="default">
      <TheHeader />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheSidebar from "../components/TheSidebar.vue";
export default {
  components: { TheSidebar, TheHeader },
};
</script>

<style scoped>
.default {
  margin-left: 170px;
  width: 100%;
  max-width: calc(100% - 190px);
}
</style>
