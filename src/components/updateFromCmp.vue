<template>
    <div>
        <router-link to="/">
            <button class="btn btn-primary font-weight-bold m-3" type="button">Back</button>
        </router-link>

        <div class="row justify-content-center my-5 w-100">
            <div class="col-8 p-5 rounded border border-primary" v-show="!success">
                <h2 class="text-center mb-5">Update Student</h2>
                <form @submit.prevent="updateStudents">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Student Name</label>
                            <input type="text" class="form-control" id="name" name="nama" placeholder="Enter Name"
                                required v-model="studentData.student_name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="softskill">Soft Skill</label>
                            <input type="text" class="form-control" id="softskill" nama="soft_skill"
                                placeholder="Enter Soft Skill" required v-model="studentData.shoft_skill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="age">Student Age</label>
                            <input type="number" class="form-control" id="age" name="umur" placeholder="Enter age"
                                required v-model="studentData.student_age">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select id="gender" class="form-control" name="jenis_kelamin" required
                                v-model="studentData.gender">
                                <option selected disabled value="">Choose Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="hardskill">Hard Skill</label>
                            <input type="text" class="form-control" id="hardskill" name="hard_skill"
                                placeholder="Enter hard skills" required v-model="studentData.hard_skill">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="email">Student Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email"
                                required v-model="studentData.student_email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="interest">Interest</label>
                            <select id="interest" class="form-control" name="interest" required
                                v-model="studentData.interest">
                                <option selected disabled value="">Choose Interest</option>
                                <option>Data Science</option>
                                <option>Network</option>
                                <option>Web Frontend</option>
                                <option>Web Backend</option>
                                <option>Mobile Apps</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="selfDescription">Self Description</label>
                            <textarea class="form-control" name="deskripsi_diri" id="selfDescription" cols="100"
                                required v-model="studentData.self_description"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
            <succesUpCmp v-show="success"></succesUpCmp>
        </div>
    </div>
</template>

<script>

import studentService from '@/service/studentService';
import succesUpCmp from '@/components/succesUpdateCmp'

export default {
    name: 'UpdateFromCmp',
    components: {
        succesUpCmp,
    },
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
        };
    },
    methods: {
        updateStudents() {
            let data = this.studentData;
            console.log(data);
            let id = this.$route.params.id;
            studentService.updateStudent(id, data)
                .then((response) => {
                    console.log(response.data);
                    this.success = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getStudent() {
            let id = this.$route.params.id;
            studentService.getStudent(id)
                .then((response) => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getStudent();
    },
}
</script>

<style>

</style>