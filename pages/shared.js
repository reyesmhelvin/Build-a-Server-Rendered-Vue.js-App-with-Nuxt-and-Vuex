import axios from 'axios'

export async function init({store, redirect, isClient}){
    if (isClient) return
    try {
        const response = await axios.get('http://192.168.99.100:8080/wp-json/wp/v2/posts')
        store.commit('init', response.data)
    } catch(error) {
        redirect('/error')
    }
}