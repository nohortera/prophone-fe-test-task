import axios from "axios";

export const fetchImages = async (query) => {
    const result = await axios.get('https://pixabay.com/api/?key=33514977-fa7a809f1a8cdbe625a3d5ea7', {
        params: {
            per_page: 30,
            q: query
        }
    })
    return result.data.hits
}

export const fetchOneImage = async (id) => {
    const result = await axios.get(`https://pixabay.com/api/?key=33470495-6feee9f5c9537d6cf20c8532b&id=${id}`)
    return result.data.hits[0]
}
