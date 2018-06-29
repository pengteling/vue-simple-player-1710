<template>
  <div>
      <div class="helper">
        <span class="left">{{ leftItemsCount }} items left</span>
        <span class="tabs">
            <!-- All Active Completed -->
            <span 
              v-for="state in states" 
              :class="{actived: state ===filter}"
              @click="toggleFilter(state)"
              :key="state"
            >
              {{ state }}
            </span>
        </span>
        <span class="clear" v-show="isHaveCompleted" @click="clearCompleted">Clear Completed</span>
      </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  // props: ["leftItemsCount", "isHaveCompleted", "filter"],
  computed:{
    ...mapState(['filter']),
    ...mapGetters(['leftItemsCount','isHaveCompleted'])
  },
  methods: {
    ...mapMutations(['toggleFilter','clearCompleted'])
    // clearCompleted() {
    //   this.$emit("clear-completed");
    // },
    // toggleFilter(state) {
    //   this.$emit("toggle-filter", state);
    // }
  },
  data() {
    return {
      states: ["All", "Active", "Completed"]
    };
  }
};
</script>
<style lang="scss">
.helper {
  height: 40px;
  line-height: 40px;
}

.left {
  float: left;
  margin-right: 100px;
}
.clear {
  cursor: pointer;
  float: right;
}
.tabs span {
  padding: 5px 14px;
  &.actived {
    border: #c00 1px solid;
  }
  border-radius: 3px;
  cursor: pointer;
}
</style>
