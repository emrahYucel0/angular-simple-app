export interface User {
    id:number;
    firstName:string;
    lastNane:string;
    age:Number;
}

export interface Permission {
    id:number;
    name:string;
}

export interface UserPermission {
    id:number;
    userId:number;
    permissionId:number;
}

export interface UserCar {
    id:number;
    userId:number;
    model:string;
    brand:string;
    year:number;
}