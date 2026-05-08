import { IUser, ITask, Status } from './models';

export class User implements IUser {
    constructor(
        public id: number, 
        public nombre: string, 
        public email: string
    ) {
       
        if (!email.includes('@')) {
            throw new Error(`El email de ${nombre} no es válido.`);
        }
    }
}


export class Task implements ITask {
    public estado: Status = 'pendiente';

    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public asignadoA?: User
    ) {
        if (titulo.length < 3) throw new Error("El título debe tener al menos 3 caracteres.");
    }

    marcarComoCompletada(): void {
        this.estado = 'completada';
    }
}


export class Project {
    
    private tareas: Task[] = [];

    constructor(public nombre: string) {}

    agregarTarea(nuevaTarea: Task): void {
        this.tareas.push(nuevaTarea);
    }

   
    obtenerTareas(filtro?: Status): Task[] {
        if (filtro) {
            return this.tareas.filter(t => t.estado === filtro);
        }
        return this.tareas;
    }

    
    filtrarPorUsuario(userId: number): Task[] {
        return this.tareas.filter(t => t.asignadoA?.id === userId);
    }
}