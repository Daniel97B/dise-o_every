export  type Role = 'SEGURIDAD'| 'ADMIN'
export interface User{
 usuario: string;
 password: string;

}

export interface UserRespons {
    menssage: string;
    token: string;
    Iduser: number;
    rol: Role;
}