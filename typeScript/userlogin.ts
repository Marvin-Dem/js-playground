export type LoginData = {
    username : string;
    password : string;
}
const database: LoginData[] = [{
    username: "xXHeadshot69Xx",
    password: "kodenhobold23",
},
{
    username: "ibangedyourmom",
    password: "ocanada",
},
{
    username: "Gosch42",
    password: "froxxundacidsinddiegeilsten",
}]
export function LogIn(loginData:LoginData) {
    let logintry = false;
    for(let entry of database){
        if (JSON.stringify(entry) === JSON.stringify(loginData)) {
            logintry = true;
        }
        else {}
    } 
    return logintry;
}