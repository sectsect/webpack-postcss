<template>
  <div><p v-if="isVisible">{{ message }}</p></div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Hello'
    }
  },
  computed: {
    isVisible: function() {
      if (this.message) {
        return true;
      } else {
        return false;
      }
    }
  }
}
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
