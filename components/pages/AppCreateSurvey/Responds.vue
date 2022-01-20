<template>
  <div>
    <AppRespondsItem
      v-for="(condition, i) in conditions"
      :key="condition.id"
      :condition="condition"
      :currentNumber="i + 1"
      :conditionsLength="conditions.length"
      @changeForm="handleChangeForm"
    />
    <AppRespondsItemEmpty />
    <div class="responds__add" @click="addNewSurvey">
      <h3 class="responds__plus">+</h3>
      <p>
        Нажмите, чтобы добавить новые условия выборки. Все условия связываются
        между собой логическим "И".
      </p>
    </div>

    <div class="responds__buttons-area">
      <button
        class="responds__button responds__test"
        type="button"
        @click="testForm"
      >
        Протестировать опрос
      </button>

      <h4 v-if="resServer && !clickTest" class="responds__message">
        Результат добавлен!
      </h4>

      <div v-if="clickTest">
        <h4 v-if="validForm" class="responds__message">Форма заполнена!</h4>
        <h4 v-else class="responds__message" style="color: red">
          Форма не заполнена!
        </h4>
      </div>

      <button
        :class="{ responds__button_cursor: !validForm }"
        class="responds__button responds__submit"
        type="button"
        @click="submitForm"
        :disabled="!validForm"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import AppRespondsItem from "@/components/AppRespondsItem.vue";
import AppRespondsItemEmpty from "@/components/AppRespondsItemEmpty.vue";
export default {
  name: "CreateSurveyResponds",

  components: { AppRespondsItem, AppRespondsItemEmpty },

  data() {
    return {
      formData: {},
      resServer: false,
      clickTest: false,
      validForm: false,
    };
  },

  methods: {
    handleChangeForm(fieldName, newValue) {
      this.formData = { ...this.formData, [fieldName]: newValue };
    },

    testForm() {
      this.clickTest = true;
      setTimeout(() => {
        this.clickTest = false;
      }, 2000);
    },

    submitForm() {
      this.resServer = this.$store.dispatch("addResult", this.formData);
      this.validForm = false;
      Object.keys(this.formData).forEach((field) => {
        delete this.formData[field];
      });
      setTimeout(() => {
        this.resServer = false;
      }, 2000);
    },

    addNewSurvey() {
      console.log(
        "попап с формой - сабмит на сервер - ответ - добавление условия в initialConditions"
      );
    },
  },

  watch: {
    formData() {
      if (Object.keys(this.formData).length === this.conditions.length) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    },

    conditions() {
      this.validForm = false;
    },
  },

  computed: {
    conditions() {
      return this.$store.getters.conditions;
    },
  },
};
</script>

<style scoped>
.responds__plus {
  margin: 10px 0 0;
}

.responds__add {
  color: green;
  font-size: 18px;
  text-align: center;
  margin: 10px;
  border: 2px solid rgba(204, 204, 204, 0.521);
  border-radius: 8px;
  cursor: pointer;
}

.responds__buttons-area {
  padding: 12px;
  display: flex;
  justify-content: space-between;
}

.responds__message {
  margin: 0;
  color: teal;
}

.responds__button {
  border: 2px solid #ccc;
  border-radius: 4px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.responds__button_cursor {
  cursor: auto;
}

.responds__test {
  background-color: rgb(250, 250, 250);
}

.responds__submit {
  border: 2px solid rgb(105, 177, 105);
  background-color: rgba(204, 255, 204, 0.3);
}
</style>
