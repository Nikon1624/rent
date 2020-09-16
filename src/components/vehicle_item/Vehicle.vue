<template>
  <div :class="$style.vehicle_container" class="container">
    <Error v-if="!selectedVehicle" @reloadClick="reloadPage"></Error>
    <section v-else :class="$style.vehicle">
      <div :class="$style.vehicle_img">
        <img :src="selectedVehicle.image" alt="desc">
      </div>
      <div :class="$style.vehicle_desc">
        <h2 :class="$style.vehicle_title" class="title">{{ selectedVehicle.name }}</h2>
        <nav :class="$style.vehicle_nav">
          <ul :class="$style.vehicle_list">
            <router-link v-for="(navItem, i) in navItems"
                         :key="i"
                         :active-class="$style.vehicle_item_active"
                         :to="`/vehicle/${vehicleId}/${navItem.route}`"
                         tag="li"
                         :class="$style.vehicle_item"
                         exact
            >{{ navItem.title }}</router-link>
          </ul>
        </nav>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
import Error from '@/components/error/Error';
import {mapGetters} from 'vuex';

export default {
  name: "Vehicle",
  components: {
    Error
  },
  data() {
    return {
      navItems: [
        {
          title: 'Specifications',
          route: ''
        },
        {
          title: 'Team',
          route: 'team'
        },
        {
          title: 'Rent terms',
          route: 'rent'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicle: 'vehicle'
    }),
    vehicleId() {
      return this.$route.params.id;
    },
    selectedVehicle() {
      return this.vehicle(this.vehicleId);
    }
  },
  methods: {
    reloadPage() {
      this.$store.dispatch('vehicles/fetchVehicles');
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables.scss';
@import '~@/assets/css/helpers/mixins.scss';

.vehicle_container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.vehicle {
  display: flex;
}

.vehicle_img {
  align-self: flex-start;
  width: 50%;
  border-radius: 24px;
  overflow: hidden;
  font-size: 0;
}

.vehicle_desc {
  width: 50%;
  padding: 40px 0 0 65px;
}

.vehicle_title {
  @include indents-reset;
  margin-bottom: 30px;
  font-size: 40px;
}

.vehicle_nav {
  margin-bottom: 30px;
}

.vehicle_list {
  @include list-reset;
  display: flex;
}

.vehicle_item {
  margin-right: 32px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}

.vehicle_item_active {
  color: $main400;
}

@media (max-width: 768px) {
  .vehicle {
    flex-direction: column;
  }

  .vehicle_img {
    width: 100%;
    margin-bottom: 20px;
  }

  .vehicle_desc {
    width: 100%;
    padding: 0;
  }
}
</style>