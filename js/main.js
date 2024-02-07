const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Ecco le tue RandomEmail',
            list: [],

        };
    },

    methods() {

    },
    created() {


        for (let i = 0; i < 60; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                console.table(response.data.response);
                this.list.push(response.data.response);


            });
        }
    }

});

app.mount('#app');