<template>
  <div id="app" :class="`app_${activeTheme}`">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  computed: {
    ...mapGetters('app', {
      activeTheme: 'activeTheme'
    })
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/style.scss';
@import '~@/assets/css/helpers/variables.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 55px 0;
  font-size: 14px;
}

.title {
  font-weight: 700;
}

.app_day {
  color: $base300;
  background-color: $base0;

  .title {
    color: $base500;
  }

  .dark-colored-wrapper {
    background-color: $base50;
  }

  .colored-wrapper {
    background-color: $base0;
  }
}

.app_night {
  color: $base200;
  background-color: $base500;

  .title {
    color: $base0;
  }

  .dark-colored-wrapper {
    background-color: $base600;
  }

  .colored-wrapper {
    background-color: $base500;
  }
}

@media (max-width: 768px) {
  #app {
    padding: 20px 0;
  }
}
</style>
