import axios from 'axios'

const base_url = '/api/students'
export default {

    getAllStudents() {
        return axios.get(base_url).then(response => {
            return response.data
        }).catch(e => {
    console.log(e);
});
    },
    addStudent(student) {
        return axios.post(base_url, student).then(response => {
            return response.data
        }).catch(e => {
            console.log(e);
        });
    },

    updateStudent(student) {
        return axios.patch(`${base_url}/${student.id}`, student).then(response => {
            return response.data
        })
    },

    deleteStudent(id) {
        return axios.delete('/api/students/' + id).then(response => {
            return response.data
        })
    }


}