<template>
  <div>
    <headerCmp></headerCmp>
    <AddCmp></AddCmp>
    <copyrightCmp></copyrightCmp>
  </div>
</template>
   
   <script>
import headerCmp from "../components/header.vue";
import AddCmp from "../components/addfrom.vue";
import copyrightCmp from "../components/copyright.vue";

export default {
  name: "AddPage",
  components: {
    headerCmp,
    AddCmp,
    copyrightCmp,
  },
};
</script>
   
   <style>
</style>