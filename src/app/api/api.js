class API {
    constructor() {
        this.api_url = process.env.API_URL;
        this.public_api_url = process.env.NEXT_PUBLIC_API_URL;
        this.api_token = process.env.API_TOKEN;
        this.clients = null;
    }

    init(method, content_type, body = null, revalidate = 60) {
        this.clients = {
            'method': method,
            'headers': {
                'Content-Type': content_type,
                'Authorization': 'Bearer ' + this.api_token,
            },
            'next': {
                'revalidate': revalidate,
            },
            'body': body,
        };
    }

    async getPosts(page = 1, max = 10) {
        this.init('GET', 'application/json');
        return await fetch(
            `${this.api_url}/posts?page=${page}&per_page=${max}`,
            this.clients,
        )
            .then((res) => {
                if (res.ok) {
                    return res;
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getPostDetails(id) {
        this.init('GET', 'application/json');
        return await fetch(`${this.api_url}/posts/${id}`, this.clients)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status);
            })
            .catch((err) => {
                console.log(err);
                if (err.message == '404') {
                    return {
                        name: 'Unknown User',
                    };
                }
            });
    }

    async getPostComments(id) {
        this.init('GET', 'application/json');
        return await fetch(`${this.api_url}/posts/${id}/comments`, this.clients)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getAllUsers() {
        this.init('GET', 'application/json');
        return await fetch(`${this.api_url}/users`, this.clients)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getUsers(page = 1, max = 10) {
        this.init('GET', 'application/json');
        return await fetch(
            `${this.api_url}/users?page=${page}&per_page=${max}`,
            this.clients,
        )
            .then((res) => {
                if (res.ok) {
                    return res;
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getUserDetails(id) {
        this.init('GET', 'application/json');
        return await fetch(`${this.api_url}/users/${id}`, this.clients)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status);
            })
            .catch((err) => {
                console.log(err);
                if (err.message == '404') {
                    return {
                        name: 'Unknown User',
                    };
                }
            });
    }

    async createUser(name, gender, email, status = 'active') {
        this.init('POST', 'application/json', {
            'name': name,
            'gender': gender,
            'email': email,
            'status': status,
        });
        return await fetch(
            `${this.api_url}/users?access-token=${this.api_token}`,
            this.clients,
        )
            .then((res) => {
                if (res.status == 201) {
                    return res;
                }
                throw new Error(res.status);
            })
            .catch((err) => console.log(err));
    }

    async updateUser(id, name, email, status) {
        console.log(status);
        this.init('PUT', 'application/json', 0, {
            'name': name,
            'email': email,
            'status': status,
        });
        return await fetch(`${this.api_url}/users/${id}`, this.clients)
            .then((res) => {
                if (res.ok) {
                    return res;
                }
                throw new Error(res.status);
            })
            .catch((err) => console.log(err));
    }

    async deleteUser(id) {
        return await fetch(
            `${this.api_url}/users/${id}`,
            this.init('DELETE', 'application/json'),
        )
            .then((res) => {
                if (res.ok) {
                    return res.status;
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }
}
const api = new API();
export default api;
