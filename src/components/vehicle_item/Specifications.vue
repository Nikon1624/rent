<template>
  <div>
    <p :class="$style.description">{{ content }}</p>
    <div>
      <h3 :class="$style.list_title" class="title">Features:</h3>
      <ul :class="$style.list">
        <li v-for="(listItem, i) in listItems" :key="i" :class="$style.list_item">
          <div :class="$style.list_item_img" class="dark-colored-wrapper">
            <img :src="require(`@/assets/img/icons/${listItem.imgSrc}.svg`)" alt="desc">
          </div>
          <div>
            <h4 :class="$style.list_item_title" class="title">{{ listItem.title }}</h4>
            <p :class="$style.list_item_description">{{ listItem.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Specifications",
  data() {
    return {
      listItems: [
        {
          imgSrc: 'spec_cup',
          title: 'A challenge for a true champion',
          desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
          imgSrc: 'spec_human',
          title: 'Pilot\'s sweaty hands',
          desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicle: 'vehicle'
    }),
    content() {
      return (this.vehicle(this.$route.params.id)).specifications_text;
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/mixins.scss';

.description {
  @include indents-reset;
  margin-bottom: 30px;
  font-size: 14px;
}

.list_title {
  @include indents-reset;
  font-size: 24px;
  margin-bottom: 30px;
}

.list {
  @include list-reset;
}

.list_item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.list_item_img {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 96px;
  margin-right: 25px;
  border-radius: 16px;
}

.list_item_title {
  @include indents-reset;
  margin-bottom: 10px;
  font-size: 16px;
}

.list_item_description {
  @include indents-reset;
}
</style>