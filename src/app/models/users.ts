export class Users{
    id:number;
    name: String;
    username: String;
    password: String;
    enabled: boolean;
    roles:Array<any>;

    constructor(id:number,name:String, username: string, password: string, enabled: boolean,roles:Array<any>) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.roles = roles;
    }
}