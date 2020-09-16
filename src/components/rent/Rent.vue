<template>
  <div :class="$style.rent_container" class="container">
    <section :class="$style.rent" class="dark-colored-wrapper">
      <h2 class="visually-hidden">Rent</h2>
      <Error v-if="!vehicles" @reloadClick="reloadPage"></Error>
      <div v-else :class="$style.rent_products">
        <div :class="$style.rent_products_control">
          <div :class="$style.rent_products_selector">
            <span :class="$style.rent_products_selector_text" class="title">Rent</span>
            <div :class="$style.select_wrapper">
              <select :class="$style.rent_products_select" @change="switchVehicleType">
                <option selected value="whatever">whatever</option>
                <option v-for="(vehicleType, i) in vehicleTypes"
                        :value="vehicleType"
                        :key="i"
                >{{ vehicleType }}</option>
              </select>
            </div>
          </div>
          <div :class="$style.rent_products_add">
            <span :class="$style.rent_products_add_text">Add new</span>
            <AppButton :btn-data="btnData.addBtn"></AppButton>
          </div>
        </div>
        <AppList :list-data="vehicles"></AppList>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/elements/AppButton';
import AppList from '@/components/vehicle_list/AppList';
import Error from '@/components/error/Error';
import {mapGetters} from 'vuex';

export default {
  name: "Rent",
  components: {
    AppButton,
    AppList,
    Error
  },
  data() {
    return {
      btnData: {
        addBtn: {
          className: this.$style.rent_products_add_btn,
          value: '+',
          type: 'button'
        }
      }
    };
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicles: 'vehicles',
      vehicleTypes: 'vehicleTypes'
    })
  },
  methods: {
    reloadPage() {
      this.$store.dispatch('vehicles/fetchVehicles');
    },
    switchVehicleType(evt) {
      this.$store.commit('vehicles/setCurrentType', evt.target.value);
    }
  },
  beforeMount() {
    if (!this.vehicles || this.vehicles.length === 0) {
      this.$store.dispatch('vehicles/fetchVehicles');
    }
  }
}
</script>

<style lang="scss" module>
@import '~@/assets/css/helpers/variables';
@import '~@/assets/css/helpers/mixins';

.rent_container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.rent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: calc(100vh - 215px);
  padding: 55px 65px;
  border-radius: 48px;
}

.rent_products_control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.rent_products_selector_text {
  margin-right: 10px;
  font-size: 40px;
  font-weight: 700;
}

.select_wrapper {
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    width: 20px;
    height: 20px;
    margin: auto 0;
    background-image: url("~@/assets/img/icons/arrow_down.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.rent_products_select {
  position: relative;
  width: auto;
  padding-right: 40px;
  font-size: 40px;
  font-weight: 700;
  color: $main400;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  appearance: none;
  z-index: 2;
}

.rent_products_select::-ms-expand {
  display: none;
}

.rent_products_add {
  display: flex;
  align-items: center;
}

.rent_products_add_text {
  margin-right: 20px;
  font-size: 20px;
  font-weight: 700;
  color: $main400;
}

.rent_products_add_btn {
  width: 48px;
  height: 48px;
  padding: 0;
  font-size: 30px;
}

@media (max-width: 768px) {
  .rent_container {
    padding: 0 !important;
  }

  .rent {
    padding: 25px 15px;
  }

  .error_title {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .error_desc {
    margin-bottom: 30px;
  }

  .rent_products_selector_text {
    margin-right: 5px;
  }

  .rent_products_selector_text,
  .rent_products_select {
    font-size: 24px;
  }

  .rent_products_add_text {
    margin-right: 10px;
    font-size: 16px;
  }

  .rent_products_add_btn {
    width: 32px;
    height: 32px;
    font-size: 22px;
  }
}
</style>