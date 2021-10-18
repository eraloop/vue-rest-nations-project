<template>
  <v-main class="mt-16">
    <v-container class="mt-8">
      <v-row>
        <v-col class="col-md-4">
          <div>
            <v-text-field
              preppend-icon="mdi-search"
              clear-icon="search"
              label="Search"
              required
              outlined
            ></v-text-field>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="col-md-2">
             <v-select
                solo
                :items="['Foo', 'Bar']"
                label="Filter By Region"
            ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function () {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>