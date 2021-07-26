export class User {
    id!:number;
    email: string;
    password: string;
    username: string;
    type: number;

    constructor(id: number, email: string, password: string, username: string, type: number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.type = type;
    }
}