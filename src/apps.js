const MynameApp = {
    data() {
        return {
            nome: "",
            input_name: ""
        };
    },
    methods: {
        submitform(e) {
            e.preventDefault(); // "P" em "preventDefault" deve ser minúsculo
            console.log(this.input_name);
            this.nome = this.input_name;
        }
    }
};

Vue.createApp(MynameApp).mount("#app");
