
export type Status = 'pendiente' | 'completada';


export interface IUser {
    id: number;
    nombre: string;
    email: string;
}


export interface ITask {
    id: number;
    titulo: string;
    descripcion: string;
    estado: Status;
    asignadoA?: IUser; 
}