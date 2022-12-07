<template>

  <div>
    <headerCmp></headerCmp>
    <viewCmp></viewCmp>
    <copyrightCmp></copyrightCmp>
  </div>

</template>

<script>

import headerCmp from "../components/header.vue"
import copyrightCmp from "../components/copyright.vue"
import viewCmp from "../components/viewCmp.vue"

export default {
  name: "homePage",
  components: {
    headerCmp,
    viewCmp,
    copyrightCmp,
  }
}
</script>

<style>

</style>