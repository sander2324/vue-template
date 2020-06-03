<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <Custom />
  </div>
</template>

<script>
import Custom from './components/Custom.vue';

export default {
  components: { Custom },
  data() {
    return {
      message: 'Vue app!',
    };
  },
};
</script>
