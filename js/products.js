const app = {
    data() {
        return {
            products: [],
            tempProducts: {}
        }
    },
    methods: {
        checkLogin() {
            axios.post(`${url}api/user/check`)
                .then(res => {
                    this.getProducts();
                })
                .catch(err => {
                    console.log(err);
                })
        },
        getProducts() {
            axios.get(`${url}api/${path}/admin/products/all`)
                .then(res => {
                    this.products = res.data.products;
                })
                .catch(err => {
                    window.location = './index.html'
                })
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;
        this.checkLogin();
    },
}

Vue.createApp(app).mount('#app');