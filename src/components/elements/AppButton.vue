<template>
  <button @click="onClick" :class="[$style.button, btnData.className]" :type="btnData.type">{{ btnData.value }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables.scss';

.button {
  padding: 17px 32px;
  font-size: 18px;
  font-weight: 700;
  color: $base0;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  background-color: $main400;
}

.button:active {
  transform: scale(0.955);
}

@media (max-width: 768px) {
  .button {
    padding: 16px 24px;
    font-size: 14px;
  }
}
</style>