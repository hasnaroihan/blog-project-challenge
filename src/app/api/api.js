class API {
    constructor() {
        this.api_url = process.env.API_URL;
        this.public_api_url = process.env.NEXT_PUBLIC_API_URL;
        this.api_token = process.env.API_TOKEN;
    }

    init(method, content_type, body, revalidate = 0) {
        let clients = {
            'method': method,
            'headers': {
                'Accept': content_type,
                'Content-Type': content_type,
                'Authorization': this.api_token,
            },
            'next': {
                'revalidate': revalidate,
            },
            'body': body,
        };

        return clients;
    }

    async getPosts(page = 1, max = 10) {
        return await fetch(
            `${this.api_url}/posts?page=${page}&per_page=${max}`,
            this.init('GET', 'application/json', null, 10),
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
        return await fetch(
            `${this.api_url}/posts/${id}`,
            this.init('GET', 'application/json', null),
        )
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
        return await fetch(
            `${this.api_url}/posts/${id}/comments`,
            this.init('GET', 'application/json', null),
        )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getAllUsers() {
        return await fetch(
            `${this.api_url}/users`,
            this.init('GET', 'application/json', null),
        )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.text());
            })
            .catch((err) => console.log(err));
    }

    async getUsers(page = 1, max = 10) {
        return await fetch(
            `${this.api_url}/users?page=${page}&per_page=${max}`,
            this.init('GET', 'application/json', null),
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
        return await fetch(
            `${this.api_url}/users/${id}`,
            this.init('GET', 'application/json', null),
        )
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
        return await fetch(
            `${this.public_api_url}/users`,
            this.init(
                'POST',
                'application/json',
                JSON.stringify({
                    'name': name,
                    'gender': gender,
                    'email': email,
                    'status': status,
                }),
            ),
        ).then((res) => {
            return res;
        });
    }

    async updateUser(id, name, email, status) {
        return await fetch(
            `${this.api_url}/users/${id}`,
            this.init(
                'PATCH',
                'application/json',
                JSON.stringify({
                    'name': name,
                    'email': email,
                    'status': status,
                }),
            ),
        )
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => console.log(err));
    }

    async deleteUser(id) {
        return await fetch(`${this.api_url}/users/${id}`, {
            'method': 'DELETE',
            'headers': {
                'Authorization': this.api_token,
            },
        }).then((res) => {
            console.log(res);
            return res;
        });
    }
}
const api = new API();
export default api;
