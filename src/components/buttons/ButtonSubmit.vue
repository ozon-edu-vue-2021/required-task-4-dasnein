<template>
  <button
    v-on="$listeners"
    class="btn btn-primary"
    type="submit"
    :disabled="disabled"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Отправить
  </button>
</template>

<script>
export default {
  name: "ButtonSubmit",

  props: {
    text: {
      type: String,
      default: "Отправить",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
