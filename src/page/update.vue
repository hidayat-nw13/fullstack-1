<template>
  <div>
    <headerCmp></headerCmp>
    <UpdateFromCmp></UpdateFromCmp>
    <copyrightCmp></copyrightCmp>
  </div>
</template>

<script>
import headerCmp from "../components/header.vue";
import UpdateFromCmp from "../components/updateFromCmp.vue";
import copyrightCmp from "../components/copyright.vue";

export default {
  name: "updatePage",
  components: {
    headerCmp,
    UpdateFromCmp,
    copyrightCmp,
  },
};
</script>

<style>
</style>