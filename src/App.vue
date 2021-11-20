<template>
  <div id="app">
    <div class="container-md my-5">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
