<template>
  <form>
    <h3 class="mb-4">Личные данные</h3>
    <div class="row mb-4">
      <div class="col-4">
        <Input label="Фамилия" name="last_name" />
      </div>
      <div class="col-4">
        <Input label="Имя" name="first_name" />
      </div>
      <div class="col-4">
        <Input label="Отчество" name="patronymic" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6">
        <Input
          label="Дата рождения"
          name="birth_date"
          placeholder="дд.мм.гггг"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <Input label="E-mail" name="email" />
      </div>
    </div>
    <!--  -->
    <div class="row mb-4">
      <div class="col-12">
        <h5>Пол</h5>
      </div>
      <div class="col-12">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="sex"
            id="inlineRadio1"
            value="man"
          />
          <label class="form-check-label" for="inlineRadio1">Мужской</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="sex"
            id="inlineRadio2"
            value="woman"
          />
          <label class="form-check-label" for="inlineRadio2">Женский</label>
        </div>
      </div>
    </div>
    <!--  -->
    <h3 class="mb-4">Паспортные данные</h3>
    <div class="row mb-4">
      <div class="col-12">
        <label for="citizenship" class="form-label text-secondary"
          >Гражданство</label
        >
      </div>
      <div class="col-12">
        <input id="citizenship" list="citizenship_list" />
        <datalist id="citizenship_list">
          <option value="Russia">Russia</option>
          <option value="New Zealanders">New Zealanders</option>
          <option value="Manx">Manx</option>
          <option value="Guyanese">Guyanese</option>
          <option value="Cameroonians">Cameroonians</option>
          <option value="Bahamians">Bahamians</option>
          <option value="Quebecers">Quebecers</option>
          <option value="Ethiopians">Ethiopians</option>
          <option value="Singaporeans">Singaporeans</option>
          <option value="Australians">Australians</option>
          <option value="Americans">Americans</option>
          <option value="Lithuanians">Lithuanians</option>
          <option value="Finns">Finns</option>
          <option value="Ugandans">Ugandans</option>
          <option value="Aromanians">Aromanians</option>
          <option value="Swiss">Swiss</option>
          <option value="Palauans">Palauans</option>
          <option value="Quebecers">Quebecers</option>
          <option value="Mauritians">Mauritians</option>
          <option value="Albanians">Albanians</option>
          <option value="Finnish">Finnish</option>
          <option value="Mexicans">Mexicans</option>
          <option value="Belgians">Belgians</option>
          <option value="Latvians">Latvians</option>
          <option value="Cubans">Cubans</option>
          <option value="Macedonians">Macedonians</option>
          <option value="Sudanese">Sudanese</option>
          <option value="Bahamians">Bahamians</option>
          <option value="Chadians">Chadians</option>
          <option value="Ivoirians">Ivoirians</option>
        </datalist>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-3">
        <Input label="Серия паспорта" name="passport_series" />
      </div>
      <div class="col-3">
        <Input label="Номер паспорта" name="passport_number" />
      </div>
      <div class="col-6">
        <Input label="Дата выдачи" name="passport_date" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6">
        <Input label="Фамилия на латинице" name="last_name" />
      </div>
      <div class="col-6">
        <Input label="Имя на латинице" name="first_name" />
      </div>
      <div class="col-12">
        <p class="text-muted">
          <small>
            Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan
          </small>
        </p>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-3">
        <Input label="Номер паспорта" name="passport_number" />
      </div>
      <div class="col-3">
        <Input label="Страна выдачи" name="passport_country" />
      </div>
      <div class="col-6">
        <Input label="Тип паспорта" name="passport_type" />
      </div>
    </div>
    <!--  -->
    <div class="row mb-4">
      <div class="col-12">
        <h5>Меняли ли фамилию или имя?</h5>
      </div>
      <div class="col-12">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="is_name_changed"
            id="inlineRadio1"
            value="0"
          />
          <label class="form-check-label" for="inlineRadio1">Нет</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="is_name_changed"
            id="inlineRadio2"
            value="1"
          />
          <label class="form-check-label" for="inlineRadio2">Да</label>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-6">
        <Input label="Фамилия" name="last_name" />
      </div>
      <div class="col-6">
        <Input label="Имя" name="first_name" />
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-auto">
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Отправить
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Input from "./inputs/Input.vue";

export default {
  components: {
    Input,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
