//定义接口约束我们的对象
interface UserInterface {
    user: string;
    password: string;
    id: number;
};

// @ts-ignore
class User implements UserInterface {
    id: number;
    password: string;
    user: string;

    constructor(id: number, password: string, user: string) {
        this.id = id;
        this.user = user;
        this.password = password;
    }
}