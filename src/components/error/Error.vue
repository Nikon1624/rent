<template>
  <div :class="$style.error">
    <h3 :class="$style.error_title" class="title">An error has occurred</h3>
    <p :class="$style.error_desc">Please refresh the page</p>
    <AppButton @btn-click="reloadClick" :btn-data="btnData.reloadBtn"></AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/elements/AppButton';

export default {
  name: "Error",
  components: {
    AppButton
  },
  data() {
    return {
      btnData: {
        reloadBtn: {
          className: '',
          value: 'Reload page',
          type: 'button'
        }
      }
    };
  },
  methods: {
    reloadClick() {
      this.$emit('reloadClick');
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables.scss';
@import '~@/assets/css/helpers/mixins.scss';

.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
}

.error_title {
  @include indents-reset;
  margin-bottom: 25px;
  font-size: 40px;
  font-weight: 700;
}

.error_desc {
  @include indents-reset;
  margin-bottom: 40px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .error_title {
    font-size: 24px;
  }
}
</style>