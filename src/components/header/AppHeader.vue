<template>
  <header :class="$style.header">
    <div :class="$style.header_container" class="container">
      <div :class="$style.header_left">
        <router-link to="/" tag="div" :class="$style.logo">
          <img :src="require(`@/assets/img/icons/${logoImg}.svg`)" alt="logo">
        </router-link>
        <p :class="$style.slogan">World's first affordable airsharing</p>
      </div>
      <div :class="$style.header_right">
        <div @click="switchTheme" :class="$style.theme_switcher">
          <img :class="$style.theme_switcher_icon" :src="require(`@/assets/img/icons/${themeImg}.svg`)" alt="theme switch">
          <span :class="$style.theme_switcher_text">{{ themeText }}</span>
        </div>
        <div :class="$style.notifications">
          <img :class="$style.notifications_message" src="@/assets/img/icons/message.svg" alt="messages">
          <img :class="$style.notifications_notification" src="@/assets/img/icons/notification.svg" alt="notifications">
        </div>
        <div :class="$style.user_profile">
          <span :class="$style.user_profile_name" class="title">Bessie Cooper</span>
          <img :class="$style.user_profile_photo" src="@/assets/img/user.jpg" alt="user photo">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters('app', {
      activeTheme: 'activeTheme'
    }),
    logoImg() {
      return `logo_${this.activeTheme}`;
    },
    themeImg() {
      return `theme_${this.activeTheme}`;
    },
    themeText() {
      let modeText = this.activeTheme === 'day' ? 'Night' : 'Day';

      return `${modeText} mod`;
    }
  },
  methods: {
    switchTheme() {
      this.$store.commit('app/switchActiveTheme');
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/mixins.scss';

.header {
  margin-bottom: 40px;
}

.header_container {
  display: flex;
  justify-content: space-between;
}

.header_left,
.header_right,
.user_profile {
  display: flex;
  align-items: center;
}

.logo {
  flex-shrink: 0;
  margin-right: 65px;
  cursor: pointer;
}

.slogan {
  @include indents-reset;
}

.theme_switcher {
  display: flex;
  align-items: center;
  margin-right: 105px;
  cursor: pointer;
  user-select: none;
}

.theme_switcher_icon {
  margin-right: 18px;
}

.notifications {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.notifications_message {
  margin-right: 30px;
}

.user_profile_name {
  margin-right: 15px;
  font-weight: 700;
}

.user_profile_photo {
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

@media (max-width: 1150px) {
  .logo {
    margin-right: 30px;
  }

  .theme_switcher,
  .notifications {
    margin-right: 30px;
  }

  .notifications_message {
    margin-right: 20px;
  }
}

@media (max-width: 950px) {
  .theme_switcher {
    margin-right: 20px;
  }

  .theme_switcher_icon {
    margin-right: 0;
  }

  .theme_switcher_text {
    display: none;
  }

  .notifications {
    margin-right: 20px;
  }

  .user_profile_name {
    display: none;
  }
}

@media (max-width: 768px) {
  .header {
    margin-bottom: 10px;
  }

  .logo {
    width: 105px;
    margin-right: 10px;
  }

  .slogan {
    display: none;
  }

  .theme_switcher_icon {
    width: 15px;
  }

  .notifications_notification,
  .notifications_message {
    width: 20px;
  }

  .user_profile_photo {
    width: 25px;
  }
}
</style>