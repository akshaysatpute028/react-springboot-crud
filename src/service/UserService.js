import axios from 'axios'

const USER_BASE_REST_API = "http://localhost:8080/api/v1/users/"
class UserService {

  getAllUsers() {
    return axios.get(USER_BASE_REST_API)
  }
  createUser(user) {
    return axios.post(USER_BASE_REST_API, user)
  }
  findUserById(id) {
    return axios.get(USER_BASE_REST_API + id)
  }

  updateUser(id, user) {
    return axios.put(USER_BASE_REST_API + id,user)
  }

  deleteUser(id) {
    return axios.delete(USER_BASE_REST_API + id)
  }
}

export default new UserService();


