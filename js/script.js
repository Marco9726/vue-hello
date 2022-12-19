const {
    createApp
} = Vue;

createApp({
    data(){
        return {
            title: 'TITOLO ESERCIZIO',
            url: 'https://media-assets.wired.it/photos/630dd42a934a411e4c04a538/16:9/w_2560%2Cc_limit/House-of-the-Dragon-CGI-Culture.jpg'

        }
    }
}).mount('#app')