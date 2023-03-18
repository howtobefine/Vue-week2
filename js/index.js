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
        // 登入
        login() {
            axios.post(`${url}admin/signin`, this.user)
                .then(res => {
                    // 解構
                    const { token, expired } = res.data;
                    // 存入 Cookie
                    document.cookie = `hexschool=${token}; expires=${new Date(expired)}`;
                    // alert 先跳之後再跳轉頁面
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