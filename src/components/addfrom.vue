<template>
  <div class="row justify-content-center my-5">
    <div class="col-6 p-5 rounded border border-primary" v-show="!success">
      <form @submit.prevent="inputStudent">
        <h3 class="text-center mb-5">ADD STUDENT</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="StudentName">Student Name</label>
            <input v-model="studentData.student_name" type="text" class="form-control" id="studentName"
              placeholder="student Name" />
          </div>
          <div class="form-group col-md-6">
            <label for="shoftSkill">Shoft Skills</label>
            <input v-model="studentData.shoft_skill" type="text" class="form-control" id="ShoftSkill"
              placeholder="Shoft Skill" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="studentAge">Student Age</label>
            <input v-model="studentData.student_age" type="text" class="form-control" id="studentAge" />
          </div>
          <div class="form-group col-md-3">
            <label for="gender">Genderr</label>
            <select v-model="studentData.gender" id="gender" class="form-control">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="hardSkill">Hard Skill</label>
            <input v-model="studentData.hard_skill" type="text" class="form-control" id="hardSkill" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="studentEmail">Student Email</label>
            <input v-model="studentData.student_email" type="Email" class="form-control" id="studentEmail"
              placeholder="Studen Email" />
          </div>
          <div class="form-group col-md-6">
            <label for="interest">Interest</label>
            <select v-model="studentData.interest" id="gender" class="form-control">
              <option selected disabled value="">Choose...</option>
              <option>Data Science</option>
              <option>Network</option>
              <option>Web Frontend</option>
              <option>Web Backend</option>
              <option>Mobile Apps</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-15">
            <label for="selfDescription">Self Description</label>
            <textarea v-model="studentData.self_description" name="text" id="selfDescription" cols="87" rows="4">
Ambisious person</textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">{{ buttonValue }}</button>
      </form>
    </div>
    <successForm v-show="success"></successForm>
  </div>
</template>

<script>
import studentService from "../service/studentService";
import successForm from "../components/succesAddCmp";

export default {
  name: "AddCmp",

  data() {
    return {
      studentData: {
        student_name: null,
        student_age: null,
        student_email: null,
        gender: null,
        shoft_skill: null,
        hard_skill: null,
        interest: null,
        self_description: null,
      },
      success: false,
      buttonValue: "Submit",
    };
  },

  methods: {
    inputStudent() {
      let data = this.studentData;
      if (this.buttonValue == "Submit") {
        studentService
          .insertStudent(data)
          .then((response) => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        studentService
          .updateStudent(data.id, data)
          .then(response => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  components: {
    successForm,
  },
};
</script>

<style>

</style>