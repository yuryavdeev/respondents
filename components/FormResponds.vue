<template>
  <div>
    <FormRespondsItem
      v-for="(condition, i) in conditions"
      :key="condition.id"
      :condition="condition"
      :currentNumber="i + 1"
      :conditionsLength="conditions.length"
      @changeForm="handleChangeForm"
    />

    <FormRespondsAddItem />

    <div v-if="Object.keys(formData).length" class="responds__form-area">
      <h4 class="responds__form-text">Добавленные поля формы:</h4>
      <div
        v-for="field in Object.keys(formData)"
        :key="field"
        class="responds__form-field"
      >
        <p>{{ field }}</p>
        <p>{{ formData[field] }}</p>
      </div>
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
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
import FormRespondsItem from "./FormRespondsItem.vue";
import FormRespondsAddItem from "./FormRespondsAddItem.vue";
export default {
  name: "FormResponds",

  components: { FormRespondsItem, FormRespondsAddItem },

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

    async submitForm() {
      const res = await this.$store.dispatch("addResult", this.formData);
      this.formData = { ...res };
      this.validForm = false;

      this.resServer = true;
      setTimeout(() => {
        this.resServer = false;
      }, 2000);
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
.responds__buttons-area {
  padding: 12px 12px 0;
  display: flex;
  justify-content: space-between;
}

.responds__message {
  margin: 5px 0;
  color: green;
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
  border: 2px solid rgba(105, 177, 105, 0.5);
  background-color: rgba(204, 255, 204, 0.75);
}

.responds__form-area {
  border-top: 1px solid rgba(0, 128, 0, 0.4);
  background-color: rgb(223, 243, 255);
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  color: darkblue;
}

.responds__form-text {
  font-size: 16px;
  margin: 0;
}

.responds__form-field p {
  margin: 0;
  font-size: 14px;
  color: darkgreen;
}

.responds__form-field {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0 0 50px;
}
</style>
