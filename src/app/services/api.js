class API {
    constructor() {
        this.api_url = process.env.API_URL;
        this.api_token = null;
        this.clients = null;
    }

    init(method, content_type, body=null) {
        this.clients = {
            method: method,
            headers: {
                "Accept": content_type,
                "Content-Type": content_type,
                "Authorization": `Bearer ${this.api_token}`
            },
            next: {
                revalidate: 600
            },
            body: body
        }
    }

    async getPosts() {
        return await fetch(`${this.api_url}/posts`, this.init(
            "GET",
            "application/json",
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async getPostDetails(id) {
        return await fetch(`${this.api_url}/posts/${id}`, this.init(
            "GET",
            "application/json",
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async getPostComments(id) {
        return await fetch(`${this.api_url}/posts/${id}/comments`, this.init(
            "GET",
            "application/json",
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async getUsers() {
        return await fetch(`${this.api_url}/users`, this.init(
            "GET",
            "application/json",
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async getUserDetails(id) {
        return await fetch(`${this.api_url}/users/${id}`, this.init(
            "GET",
            "application/json",
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async createUser(name, gender, email, status="active") {
        return await fetch(`${this.api_url}/users`, this.init(
            "POST",
            "application/json",
            body={
                name: name,
                gender: gender,
                email: email,
                status: status
            }
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async updateUser(id, name, gender, email, status) {
        return await fetch(`${this.api_url}/users/${id}`, this.init(
            "PUT",
            "application/json",
            body={
                name: name,
                email: email,
                status: status
            }
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }

    async deleteUser(id) {
        return await fetch(`${this.api_url}/users/${id}`, this.init(
            "DELETE",
            "application/json"
        ))
        .then((res) => {
            return {
                status: res.status,
                data: res.json
            }
        })
    }
}
const api = new API()
export default api;