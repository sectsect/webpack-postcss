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

<style scoped>
div {
  font-weight: bold;
  font-size: calc(var(--fontSize) + 15px);
  & p {
    color: #888;
  }
}
@media (--viewport-medium) {
  div {
    font-size: 40px;
    & p {
      color: #555;
    }
  }
}
</style>
