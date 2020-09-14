<template>
  <div>
    <p :class="$style.description">{{ content }}</p>
    <div>
      <h3 :class="$style.list_title" class="title">Additional conditions</h3>
      <ul :class="$style.list">
        <li v-for="(listItem, i) in listItems" :key="i" :class="$style.list_item">{{ listItem.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "RentTerms",
  data() {
    return {
      listItems: [
        {
          text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
          text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
          text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicle: 'vehicle'
    }),
    content() {
      return (this.vehicle(this.$route.params.id)).term_text;
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables.scss';
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
  position: relative;
  margin-bottom: 15px;
  padding-left: 25px;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: $secondary400;
  }
}
</style>