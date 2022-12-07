<template>
  <div class="">
    <img
      class="card-img-top"
      src="../assets/image/img_code.jpg"
      alt="Card image cap"
    />
    <div class=""></div>

    <router-link class="mx-2" v-show="routeName == 'home'" to="add"
      ><button name="submit" style="" id="" class="btn btn-primary my-3">
        Add Data
      </button></router-link
    >
    <router-link class="mx-2" v-show="routeName == 'add'" to="/"
      ><button name="submit" style="" id="" class="btn btn-primary my-3">
        back
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "headerCmp",
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>