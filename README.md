# 📚 API RESTful de Biblioteca Digital

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB**, que permite gestionar una colección de libros. Implementa el patrón de diseño **MVC** (Modelo - Vista - Controlador) para mantener una estructura de código organizada y escalable.

## 🚀 Funcionalidades

La API permite realizar operaciones CRUD sobre el modelo `Book`, con los siguientes campos:

- `title`: string (requerido, único)
- `author`: string (requerido)
- `publishedYear`: number (opcional)
- `genre`: string (opcional)
- `available`: boolean (por defecto en `true`)

## 🔄 Endpoints

| Método | Ruta           | Descripción                  |
|--------|----------------|------------------------------|
| GET    | /api/books     | Listar todos los libros      |
| GET    | /api/books/:id | Obtener un libro por ID      |
| POST   | /api/books     | Crear un nuevo libro         |
| PATCH  | /api/books/:id | Actualizar un libro existente|
| DELETE | /api/books/:id | Eliminar un libro            |

## 📦 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/luchoegonzalez/API-RESTful-Biblioteca.git
cd API-RESTful-Biblioteca
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto con las siguientes variables:
```bash
MONGODB_URI=
PORT=
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 5. Compilar y ejecutar en producción
```bash
npm run build
npm start
```