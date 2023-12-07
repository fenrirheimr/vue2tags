<script>
import VueTypes from 'vue-types'

export default {
  props: {
    tags: Array,
    alignment: VueTypes.oneOf(['start', 'center', 'end']).def('start'),
    fontSize: Number
  }
}
</script>
<template>
  <div
      ref="container"
      class="root-tags-wrapper d-flex"
      :class="{
        'justify-start': alignment === 'start',
        'justify-space-between': alignment === 'center',
        'justify-end': alignment === 'end',
      }"
  >
    <div
        class="tag-wrapper d-flex"
        v-for="(tag, i) in tags" :key="i"
    >
      <v-icon class="icon">mdi-circle-small</v-icon>
      <v-chip
          class="tag"
          :style="{
            'font-size': `${fontSize}px`
          }"
      >
        <v-icon left v-if="tag.icon">
          {{ tag.icon }}
        </v-icon>
        {{ tag.text }}
      </v-chip>

    </div>
  </div>
</template>
<style scoped lang="scss">
@import 'src/styles/_mixin';

.root-tags-wrapper {
  flex-wrap: wrap;
  overflow: hidden;
  height: 32px;
  &.justify-space-between {
    .tag-wrapper {
      justify-content: space-between;
      flex-grow: 1;
      .tag {
        display: flex;
        white-space: nowrap;
        flex: 1 0 auto;
      }
      .icon {
        width: 100%;
      }
    }
  }
  .tag-wrapper {
    white-space: nowrap;
    &:first-child {
      width: auto;
      flex-grow: 0;
      .icon {
        display: none;
      }
    }
  }
}

</style>
