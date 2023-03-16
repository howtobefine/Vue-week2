const app = {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            axios.post(`${url}admin/signin`, this.user)
                .then(res => {
                    console.log(res.data);
                    const { token, expired } = res.data;
                    document.cookie = `hexschool=${token}; expires=${new Date(expired)}`;
                    alert('登入成功');
                    setTimeout(() => {
                        window.location = './products.html';
                    }, 0);
                })
                .catch(err => {
                    alert('登入失敗');
                })
        }
    },
}

Vue.createApp(app).mount('#app');