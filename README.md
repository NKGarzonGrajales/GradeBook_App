# 📘 GradeBook App

Un boletín básico de notas para alumnos.  
Permite calcular el promedio de las calificaciones, asignar calificaciones en formato de letras y mostrar mensajes personalizados para cada estudiante.

---

## 🚀 Características
- Calcula el **promedio** de una lista de notas.  
- Devuelve la **calificación en letras** (A++, A, B, C, D, F).  
- Informa si el estudiante **aprueba o reprueba** el curso.  

---

## 📂 Estructura del proyecto

GradeBook_App/
│
├── average/
│ ├── getAverage.js # Función para calcular el promedio
│ └── getGrade.js # Función para asignar calificaciones
│
├── README.md # Documentación del proyecto


---

## ⚙️ Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NKGarzonGrajales/GradeBook_App.git
2. Entra a la carpeta:
   cd GradeBook_App
3. Ejecuta con Node.js:
   node average/getAverage.js
   node average/getGrade.js
   
3. Ejemplo de uso:
   const { getAverage } = require("./average/getAverage");
   const { getGrade } = require("./average/getGrade");

// Promedio de notas
  console.log(getAverage([90, 80, 70])); // 80

// Calificación de un estudiante
  console.log(getGrade(95)); // "A"

  👩‍💻 Autora

NKGarzonGrajales
📌 Estudiante y desarrolladora Full Stack en formación.


   


