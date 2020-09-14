<template>
  <div>
    <p :class="$style.description">{{ content }}</p>
    <div>
      <h3 :class="$style.list_title" class="title">Qualified specialists</h3>
      <ul :class="$style.list">
        <li v-for="(listItem, i) in listItems" :key="i" :class="$style.list_item">
          <div :class="$style.list_item_img">
            <img :src="require(`@/assets/img/${listItem.imgSrc}.jpg`)" alt="desc">
          </div>
          <div>
            <h4 :class="$style.list_item_title" class="title">{{ listItem.title }}</h4>
            <p :class="$style.list_item_description">{{ listItem.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
    <p :class="$style.description_bottom">{{ content }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Team",
  data() {
    return {
      listItems: [
        {
          imgSrc: 'team1',
          title: 'Marvin McKinney',
          desc: 'Pilot assistant'
        },
        {
          imgSrc: 'team2',
          title: 'Savannah Nguyen',
          desc: 'Mechanic'
        },
        {
          imgSrc: 'team3',
          title: 'Courtney Henry',
          desc: 'Stewardess'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicle: 'vehicle'
    }),
    content() {
      return (this.vehicle(this.$route.params.id)).team_text;
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.list_item_img {
  margin-bottom: 15px;
  font-size: 0;
  border-radius: 16px;
  overflow: hidden;
}

.list_item_title {
  @include indents-reset;
  margin-bottom: 10px;
  font-size: 16px;
}

.list_item_description,
.description_bottom {
  @include indents-reset;
}
</style>