import { User, Task, Project } from './classes';


const miProyecto = new Project("Sistema de Gestión Empresarial");


const user1 = new User(1, "Ana Garcia", "ana@empresa.com");
const user2 = new User(2, "Roberto Gomez", "roberto@empresa.com");

console.log("--- 🟢 Iniciando Sistema de Tareas ---");


const tarea1 = new Task(101, "Configurar Servidor", "Instalar Node.js y bases de datos", user1);
const tarea2 = new Task(102, "Diseño de UI", "Crear los prototipos en Figma", user2);
const tarea3 = new Task(103, "Testing", "Pruebas unitarias del sistema", user1);


miProyecto.agregarTarea(tarea1);
miProyecto.agregarTarea(tarea2);
miProyecto.agregarTarea(tarea3);


tarea1.marcarComoCompletada();



console.log("\n📋 TODAS LAS TAREAS:");
console.table(miProyecto.obtenerTareas());

console.log("\n✅ TAREAS COMPLETADAS:");
console.table(miProyecto.obtenerTareas('completada'));

console.log("\n👤 TAREAS ASIGNADAS A ROBERTO (ID: 2):");
console.table(miProyecto.filtrarPorUsuario(2));