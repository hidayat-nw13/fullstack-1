import http from "../http-common"

class studentService {
    insertStudent(student) {
        return http.post("/shipping/insert", student);
    }
    getAll() {
        return http.get("/shipping/getAll");
    }
    deleteStudent(id) {
        return http.delete(`/shipping/delete/${id}`);
    }
    getStudent(id) {
        return http.get(`/shipping/getStudent/${id}`);
    }
    updateStudent(id, student) {
        return http.put(`/shipping/update/${id}`, student);
    }
}

export default new studentService();