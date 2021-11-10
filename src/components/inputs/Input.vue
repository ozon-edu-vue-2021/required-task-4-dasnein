<template>
  <div>
    <label v-if="label" :for="name" class="form-label text-secondary">{{
      label
    }}</label>
    <input
      :id="name"
      :name="name"
      :placeholder="placeholder"
      class="form-control"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    label: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
