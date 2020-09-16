<template>
  <ul :class="$style.list">
    <li v-for="itemData in listData" :key="itemData.id" :class="$style.list_item" class="colored-wrapper">
      <div :class="$style.list_item_preview">
        <router-link :to="`vehicle/${itemData.id}`" tag="img" :src="itemData.preview" alt="desc"></router-link>
      </div>
      <div :class="$style.list_item_desc_wrapper">
        <router-link :to="`vehicle/${itemData.id}`"
                     tag="h3"
                     :class="$style.list_item_title"
                     class="title"
        >{{ itemData.name }}</router-link>
        <p :class="$style.list_item_desc">{{ itemData.description }}</p>
        <strong :class="$style.list_item_rent">{{ itemData.rent }} $/h</strong>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppList",
  props: {
    listData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables.scss';
@import '~@/assets/css/helpers/mixins.scss';

.list {
  @include list-reset;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -30px;
  overflow: hidden;
}

.list_item {
  display: flex;
  width: calc((100% - 61px) / 3);
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 24px 32px;
  border-radius: 32px;
}

.list_item:nth-child(3n) {
  margin-right: 0;
}

.list_item_preview {
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  margin-right: 25px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
}

.list_item_desc_wrapper {
  margin-top: 20px;
}

.list_item_title {
  @include indents-reset;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.list_item_title:hover {
  text-decoration: underline;
}

.list_item_desc {
  @include indents-reset;
  margin-bottom: 15px;
  font-size: 12px;
}

.list_item_desc_night {
  color: $base200;
}

.list_item_rent {
  font-size: 14px;
  font-weight: 700;
  color: $secondary400;
}

@media (max-width: 1250px) {
  .list_item {
    padding: 15px;
  }

  .list_item_preview {
    width: 75px;
    height: 75px;
    margin-right: 15px;
  }

  .list_item_desc_wrapper {
    margin-top: 10px;
  }
}

@media (max-width: 960px) {
  .list_item {
    width: calc((100% - 40px) / 2);
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .list_item:nth-child(3n) {
    margin-right: 20px;
  }

  .list_item:nth-child(2n) {
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .list {
    margin-bottom: 0;
  }

  .list_item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 20px;
  }

  .list_item:nth-child(3n) {
    margin-right: 0;
  }

  .list_item:last-child {
    margin-bottom: 0;
  }

  .list_item_preview {
    width: 88px;
    height: 88px;
  }
}
</style>