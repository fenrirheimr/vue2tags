<script>
import TagsComponent from '@/components/TagsComponent.vue'

export default {
  components: {
    TagsComponent,
  },
  data: () => ({
    tags: [
      {
        text: 'Work',
        icon: 'mdi-alarm-check'
      },
      {
        text: 'Home Improvement',
      },
      {
        text: 'Vacation',
        icon: 'mdi-star'
      },
      {
        text: 'Food',
      },
      {
        text: 'Drawers',
      },
      {
        text: 'Shopping',
      },
      {
        text: 'Art',
        icon: 'mdi-fire'
      },
      {
        text: 'Tech',
        icon: 'mdi-brightness-5'
      },
      {
        text: 'Creative Writing',
        icon: 'mdi-account-circle'
      },
    ],
  }),
  mounted() {}
}
</script>

<template>
  <v-main>
    <v-container>
      <v-row class="my-3">
        <v-col>
          <div class="title mb-3">По левому краю</div>
          <TagsComponent :tags="this.tags" alignment="start" />
        </v-col>
      </v-row>
      <v-row class="my-3">
        <v-col>
          <div class="title mb-3">По правому краю</div>
          <TagsComponent :tags="tags" alignment="end" />
        </v-col>
      </v-row>
      <v-row class="my-3">
        <v-col>
          <div class="title mb-3">По центру</div>
          <TagsComponent :tags="tags" alignment="center" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="my-3"></v-divider>
    <v-container>
    <v-row class="my-3">
      <v-col>
        <div class="title mb-3">По левому краю</div>
        <TagsComponent :tags="this.tags" alignment="start" />
      </v-col>
      <v-divider vertical class="mx-5"></v-divider>
      <v-col>
        <div class="title mb-3">По центру</div>
        <TagsComponent :tags="tags" alignment="center" />
      </v-col>
      <v-divider vertical class="mx-5"></v-divider>
      <v-col>
        <div class="title mb-3">По правому краю</div>
        <TagsComponent :tags="tags" alignment="end" />
      </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>

<style scoped lang="scss">

</style>
