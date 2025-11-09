# Página Personal - Ingeniero Mecatrónico

Página de presentación personal desarrollada con Vue 3, Vite y Tailwind CSS.

## 🚀 Tecnologías

- **Vue 3** - Framework JavaScript progresivo
- **Vite** - Build tool y servidor de desarrollo
- **Vue Router** - Enrutamiento para SPA
- **Tailwind CSS** - Framework CSS utility-first
- **EmailJS** - Servicio para envío de emails desde el frontend

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd pagina_personal
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

Edita el archivo `.env` y agrega tus credenciales de EmailJS:
- `VITE_EMAILJS_PUBLIC_KEY`: Tu clave pública de EmailJS
- `VITE_EMAILJS_SERVICE_ID`: ID de tu servicio de EmailJS
- `VITE_EMAILJS_TEMPLATE_ID`: ID de tu plantilla de EmailJS

## 🏃 Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Build para Producción

Genera los archivos optimizados para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🚢 Despliegue en GitLab Pages

El proyecto está configurado para desplegarse automáticamente en GitLab Pages cuando se hace push a la rama `main` o `master`.

1. Asegúrate de tener el archivo `.gitlab-ci.yml` en la raíz del proyecto
2. Haz push a la rama `main` o `master`
3. GitLab CI/CD construirá y desplegará automáticamente

## 📝 Personalización

### Actualizar Información Personal

Edita los archivos en `src/data/`:
- `skills.js` - Habilidades y tecnologías
- `experience.js` - Experiencia laboral
- `projects.js` - Proyectos realizados

### Agregar tu CV

Reemplaza el archivo `public/cv.pdf` con tu CV en formato PDF.

### Configurar EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea una plantilla de email
4. Agrega las credenciales en el archivo `.env`

## 🎨 Características

- ✅ Diseño responsive
- ✅ Modo oscuro/claro
- ✅ Animaciones al hacer scroll
- ✅ Formulario de contacto funcional
- ✅ Descarga de CV
- ✅ Optimizado para SEO
- ✅ Listo para producción

## 📄 Licencia

Este proyecto es de uso personal.
