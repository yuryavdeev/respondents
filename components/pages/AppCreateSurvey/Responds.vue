<template>
  <div>
    <AppRespondsItem
      v-for="condition in conditions"
      :key="condition.id"
      :condition="condition"
      @changeForm="handleChangeForm"
    />
  </div>
</template>

<script>
import AppRespondsItem from "@/components/AppRespondsItem.vue";
export default {
  name: "CreateSurveyResponds",

  components: { AppRespondsItem },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    handleChangeForm(fieldName, newValue) {
      this.formData = { ...this.formData, [fieldName]: newValue };
      console.log(this.formData)
    }
  },

  computed: {
    conditions() {
      return this.$store.getters.conditions;
    },
  },
};
</script>
