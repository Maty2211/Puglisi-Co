# ServiciosFamilia

Aplicación web de consultoría en liquidación de sueldos y gestión de Recursos Humanos.

El proyecto está dividido en dos partes:
- Backend desarrollado con Django (API REST)
- Frontend desarrollado con React


## Estructura del proyecto


ServiciosFamilia/
├── backend/
├── frontend/
└── README.md


## Requisitos

- Git
- Python 3.10 o superior
- Node.js 18 o superior
- npm

Opcional:
- PostgreSQL


## Ejecución local

### Backend (Django)

#### Linux / Windows (bash)

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

El backend se ejecuta en:

http://127.0.0.1:8000



### Frontend (React)

cd frontend
npm install
npm run dev

El frontend se ejecuta en:

http://localhost:5173


## Conexión Frontend / Backend

El frontend consume la API del backend en:


http://127.0.0.1:8000/api/


Ambos servicios deben estar ejecutándose al mismo tiempo.


## Funcionalidades

* Página institucional
* Servicios ofrecidos
* Sección “Cómo trabajamos”
* Formulario de contacto
* Persistencia de consultas
* Envío de email desde el backend




----------------------------------------------------------------------------------










# Base de datos PostgreSQL – Proyecto Consultora

Este documento describe cómo crear la base de datos PostgreSQL necesaria para el proyecto **ServiciosFamilia** en una nueva computadora.

La configuración resultante será:

- Base de datos: consultora
- Usuario: consultora_user
- Contraseña: consultora123
- Puerto: 5432
- Host: localhost

---

## Requisitos

- Sistema operativo Linux
- PostgreSQL instalado y en ejecución
- Acceso con privilegios de administrador (sudo)

---

## 1. Verificar que PostgreSQL esté activo

```bash
sudo systemctl status postgresql
````

Si no está activo:

```bash
sudo systemctl start postgresql
```

---

## 2. Ingresar a PostgreSQL como superusuario

En Linux, PostgreSQL utiliza autenticación por usuario del sistema (peer authentication).

```bash
sudo -u postgres psql
```

Si el comando es correcto, el prompt cambiará a:

```
postgres=#
```

---

## 3. Crear la base de datos

Dentro de PostgreSQL:

```sql
CREATE DATABASE consultora;
```

---

## 4. Crear el usuario del proyecto

```sql
CREATE USER consultora_user WITH PASSWORD 'consultora123';
```

---

## 5. Asignar la base al usuario

```sql
ALTER DATABASE consultora OWNER TO consultora_user;
```

---

## 6. Otorgar permisos (recomendado)

```sql
GRANT ALL PRIVILEGES ON DATABASE consultora TO consultora_user;
```

---

## 7. Salir de PostgreSQL

```sql
\q
```

---

## 8. Probar la conexión con el usuario creado

```bash
psql -U consultora_user -d consultora -h localhost
```

Si la conexión es correcta, el prompt será:

```
consultora=>
```

Esto confirma que:

* la base existe
* el usuario funciona
* la autenticación por contraseña está activa

---

## 9. Configuración en Django

En el archivo `settings.py` del backend Django:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "consultora",
        "USER": "consultora_user",
        "PASSWORD": "consultora123",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

---

## 10. Crear las tablas del proyecto

Desde la carpeta `backend` del proyecto:

```bash
python manage.py migrate
```

Django creará automáticamente todas las tablas necesarias dentro de la base `consultora`.

---

## Notas

* La contraseña indicada es solo para desarrollo y aprendizaje.
* En producción se recomienda usar variables de entorno y contraseñas seguras.
* PostgreSQL maneja usuarios y bases de forma independiente del sistema operativo.
