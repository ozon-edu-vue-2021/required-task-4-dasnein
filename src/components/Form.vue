<template>
  <form @submit.prevent="onSubmit">
    <h3 class="mb-4">Личные данные</h3>
    <div class="row mb-4">
      <div class="col-4">
        <Input v-model="lastName" label="Фамилия" name="last_name" />
      </div>
      <div class="col-4">
        <Input v-model="firstName" label="Имя" name="first_name" />
      </div>
      <div class="col-4">
        <Input v-model="patronymic" label="Отчество" name="patronymic" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-5">
        <Input
          label="Дата рождения"
          name="birth_date"
          placeholder="дд.мм.гггг"
          v-model="birthDate"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <Input label="E-mail" name="email" type="email" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <h5>Пол</h5>
      </div>
      <div class="col-12">
        <RadioButtons v-model="gender" name="gender" :options="gendersList" />
      </div>
    </div>
    <h3 class="mb-4">Паспортные данные</h3>
    <div class="row mb-4">
      <SelectSearch
        :options="citizenshipsList"
        class="col-5"
        label="Гражданство"
        name="citizenship"
        v-model="citizenship"
      />
    </div>
    <div v-if="showFullPassportInfo" class="row mb-4">
      <div class="col-3">
        <Input label="Серия паспорта" name="passport_series" />
      </div>
      <div class="col-3">
        <Input label="Номер паспорта" name="passport_number" />
      </div>
      <div class="col-6">
        <Input
          label="Дата выдачи"
          name="passport_date"
          placeholder="дд.мм.гггг"
        />
      </div>
    </div>
    <div v-else class="row mb-4">
      <div class="col-6">
        <Input label="Фамилия на латинице" name="last_name_latin" />
      </div>
      <div class="col-6">
        <Input label="Имя на латинице" name="first_name_latin" />
      </div>
      <div class="col-12">
        <p class="text-muted">
          <small>
            Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan
          </small>
        </p>
      </div>
      <div class="col-3">
        <Input label="Номер паспорта" name="passport_number" />
      </div>
      <SelectDropdown
        :options="citizenshipsList"
        class="col-3"
        label="Страна выдачи"
        name="passport_country"
        v-model="passportCountry"
      />
      <SelectDropdown
        :options="passportTypesList"
        class="col-5"
        label="Тип паспорта"
        name="passport_type"
        v-model="passportType"
      />
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <h5>Меняли ли фамилию или имя?</h5>
      </div>
      <RadioButtons
        :options="baseChoicesList"
        name="is_name_changed"
        v-model="isNameChanged"
      />
    </div>
    <div v-if="isNameChanged" class="row mb-5">
      <div class="col-6">
        <Input label="Предыдущая фамилия" name="last_name_old" />
      </div>
      <div class="col-6">
        <Input label="Предыдущее имя" name="first_name_old" />
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-auto">
        <ButtonSubmit />
      </div>
    </div>
  </form>
</template>

<script>
import CITIZENSHIPS from "@/assets/data/citizenships.json";
import GENDERS from "@/assets/data/genders.json";
import PASSPORT_TYPES from "@/assets/data/passport-types.json";

import ButtonSubmit from "./buttons/ButtonSubmit.vue";
import Input from "./form_elements/Input.vue";
import RadioButtons from "./form_elements/RadioButtons.vue";
import SelectDropdown from "./form_elements/SelectDropdown.vue";
import SelectSearch from "./form_elements/SelectSearch.vue";

const BASE_CHOICES = [
  {
    value: 0,
    text: "нет",
  },
  {
    value: 1,
    text: "да",
  },
];

const DEFAULT_CITIZENSHIP = CITIZENSHIPS[0]["nationality"];
const DEFAULT_GENDER = GENDERS[0]["value"];
const DEFAULT_IS_NAME_CHANGED = BASE_CHOICES[0]["value"];
const DEFAULT_PASSPORT_TYPE = PASSPORT_TYPES[0]["type"];

const COUNTRIES_WITH_SHORT_PASSPORT_INFO = ["Russia"];

export default {
  name: "Form",

  components: {
    ButtonSubmit,
    Input,
    RadioButtons,
    SelectDropdown,
    SelectSearch,
  },

  data() {
    return {
      citizenshipsList: CITIZENSHIPS.map(({ nationality }) => ({
        text: nationality,
        value: nationality,
      })),
      gendersList: GENDERS,
      baseChoicesList: BASE_CHOICES,
      passportTypesList: PASSPORT_TYPES.map(({ type }) => ({
        text: type,
        value: type,
      })),

      birthDate: "",
      citizenship: DEFAULT_CITIZENSHIP,
      firstName: "",
      gender: DEFAULT_GENDER,
      isNameChanged: DEFAULT_IS_NAME_CHANGED,
      lastName: "",
      passportCountry: DEFAULT_CITIZENSHIP,
      passportType: DEFAULT_PASSPORT_TYPE,
      patronymic: "",
    };
  },

  computed: {
    showFullPassportInfo() {
      return COUNTRIES_WITH_SHORT_PASSPORT_INFO.includes(this.citizenship);
    },
  },

  methods: {
    onSubmit(e) {
      console.log("Submit event:");

      const formData = new FormData(e.target);
      const entries = [...formData.entries()].map((el) => el.join(": "));

      console.log(entries.join("\n"));
    },
  },
};
</script>
