<template>
  <div class="d-flex flex-wrap">
    <div v-for="item in studentData" :key="item.id" class="card ms-3 mt-3 mr-2" style="width: 25rem">
      <div class="card-body border border-primary">
        <div>
          <h5 class="card-title">
            {{ item.student_name + ", " + item.student_age + " Years Old" }}
          </h5>
          <div class="col-auto ">
            <p class="card-text">Deskiripsi Diri{{ item.self_descriptiion }}</p>
            <p class="card-text">Email {{ item.student_email }}</p>
            <p class="card-text">Soft Skill {{ item.shoft_skill }}</p>
            <p class="card-text">Hard Skill {{ item.hard_skill }}</p>
            <p class="card-text">Interest {{ item.Interest }}</p>
          </div>

          <div>
            <router-link type="button" class="btn btn mr-2 mt-3 bg-primary"
              :to="`/update/${item.id}`">Update</router-link>
            <button type="submit" class="btn btn mt-3 bg-danger" to="/"
              @click="deleteStudentFunc(item.id)">Delete</button>

            <img class="male" v-if="item.gender == 'Male'" src="../assets/image/male.png" alt="male" />
            <img class="female" v-else-if="item.gender == 'Female'" src="../assets/image/female.png" alt="female" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import studentService from "@/service/studentService";

export default {
  name: "viewCmp",
  methods: {
    getStudent() {
      studentService
        .getAll()
        .then((response) => {
          this.studentData = response.data;
          console.log(this.studentData);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteStudentFunc(id) {
      if (confirm("apakah anda yakin hapus?")) {
        studentService
          .deleteStudent(id)
          .then(response => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
        location.reload();
      } else {
        this.$alert("hapus dibatalkan");
      }
    },
  },
  mounted() {
    this.getStudent();
  },
  data() {
    return {
      studentData: null,
    };
  },
};
</script>

<style scoped>
.male {
  width: 50px;
  margin-left: 100px;
}

.female {
  width: 40px;
  margin-left: 100px;
}
</style>