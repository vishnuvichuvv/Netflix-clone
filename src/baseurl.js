import axios from 'axios'

// create instance(a variable to hold )

// create()-axios

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance
