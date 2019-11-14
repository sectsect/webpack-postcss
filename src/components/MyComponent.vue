<template>
  <div>
    <p v-if="isVisible">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
    };
  },
  computed: {
    isVisible() {
      if (this.message) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  font-weight: bold;
  font-size: 20px;
  p {
    color: #888;
  }
}
</style>
