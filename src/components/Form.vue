<template>
  <form @submit.prevent="onSubmit">
    <h3 class="mb-4">Личные данные</h3>
    <div class="row mb-4">
      <div class="col-4">
        <Input
          v-model="lastName"
          label="Фамилия"
          name="last_name"
          :invalid="errors['last_name']"
        />
      </div>
      <div class="col-4">
        <Input
          v-model="firstName"
          label="Имя"
          name="first_name"
          :invalid="errors['first_name']"
        />
      </div>
      <div class="col-4">
        <Input
          v-model="patronymic"
          label="Отчество"
          name="patronymic"
          :invalid="errors['patronymic']"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-5">
        <Input
          label="Дата рождения"
          name="birth_date"
          placeholder="дд.мм.гггг"
          v-model="birthDate"
          type="date"
          :invalid="errors['birth_date']"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <Input
          label="E-mail"
          name="email"
          type="email"
          v-model="email"
          :invalid="errors.email"
        />
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
    <div v-if="showShortPassportInfo" class="row mb-4">
      <div class="col-3">
        <Input
          label="Серия паспорта"
          name="passport_series"
          v-model="passportSeries"
          :invalid="errors['passport_series']"
        />
      </div>
      <div class="col-3">
        <Input
          label="Номер паспорта"
          name="passport_number"
          v-model="passportNumber"
          :invalid="errors['passport_number']"
        />
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
        <Input
          label="Фамилия на латинице"
          name="last_name_latin"
          v-model="lastNameLatin"
          :invalid="errors['last_name_latin']"
        />
      </div>
      <div class="col-6">
        <Input
          label="Имя на латинице"
          name="first_name_latin"
          v-model="firstNameLatin"
          :invalid="errors['first_name_latin']"
        />
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
        <Input
          label="Предыдущая фамилия"
          name="last_name_old"
          v-model="lastNameOld"
          :invalid="errors['last_name_old']"
        />
      </div>
      <div class="col-6">
        <Input
          label="Предыдущее имя"
          name="first_name_old"
          v-model="firstNameOld"
          :invalid="errors['first_name_old']"
        />
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

import dateValidator from "@/utils/validators/date";
import emailValidator from "@/utils/validators/email";
import passportSeriesValidator from "@/utils/validators/passport_series";
import passportNumberValidator from "@/utils/validators/passport_number";
import nameLatinValidator from "@/utils/validators/name_latin";
import nameCyrillicValidator from "@/utils/validators/name_cyrillic";

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
      email: "",
      firstName: "",
      firstNameLatin: "",
      firstNameOld: "",
      gender: DEFAULT_GENDER,
      isNameChanged: DEFAULT_IS_NAME_CHANGED,
      lastName: "",
      lastNameLatin: "",
      lastNameOld: "",
      passportCountry: DEFAULT_CITIZENSHIP,
      passportNumber: "",
      passportSeries: "",
      passportType: DEFAULT_PASSPORT_TYPE,
      patronymic: "",

      errors: {},
    };
  },

  computed: {
    showShortPassportInfo() {
      return COUNTRIES_WITH_SHORT_PASSPORT_INFO.includes(this.citizenship);
    },
  },

  methods: {
    onSubmit(e) {
      console.log("Submit event result:");

      const formData = new FormData(e.target);
      const values = [...formData.entries()].reduce(
        (acc, [key, value]) => Object.assign(acc, { [key]: value }),
        {}
      );

      const { answer, isError } = this.validateFields(values);

      console.log(answer);

      if (isError) {
        console.log("error");
      }
    },
    validateFields(values) {
      this.$set(this, "errors", {});

      let answer = values;
      let isError = false;

      if (!dateValidator(this.birthDate)) {
        this.errors["birth_date"] = true;
      }

      if (!emailValidator(this.email)) {
        this.errors["email"] = true;
      }

      if (!passportSeriesValidator(this.passportSeries)) {
        this.errors["passport_series"] = true;
      }

      if (
        this.showShortPassportInfo &&
        !passportNumberValidator(this.passportNumber)
      ) {
        this.errors["passport_number"] = true;
      }

      if (!this.showShortPassportInfo) {
        if (!nameLatinValidator(this.lastNameLatin)) {
          this.errors["last_name_latin"] = true;
        }

        if (!nameLatinValidator(this.firstNameLatin)) {
          this.errors["first_name_latin"] = true;
        }
      }

      if (!nameCyrillicValidator(this.firstName)) {
        this.errors["first_name"] = true;
      }

      if (!nameCyrillicValidator(this.lastName)) {
        this.errors["last_name"] = true;
      }

      if (!nameCyrillicValidator(this.patronymic)) {
        this.errors["patronymic"] = true;
      }

      if (this.isNameChanged) {
        if (!nameCyrillicValidator(this.lastNameOld)) {
          this.errors["last_name_old"] = true;
        }

        if (!nameCyrillicValidator(this.firstNameOld)) {
          this.errors["first_name_old"] = true;
        }
      }

      if (Object.keys(this.errors).length > 0) {
        answer = "Some fields are invalid!";
      }

      return { answer, isError };
    },
  },
};
</script>
