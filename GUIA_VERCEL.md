# 🚀 Guía Paso a Paso: Desplegar en Vercel

## Paso 1: Inicializar Git (si no lo has hecho)

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
```

## Paso 2: Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta si no tienes)
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Completa:
   - **Repository name**: `pagina-personal` (o el nombre que prefieras)
   - **Description**: "Mi página personal - Portfolio"
   - **Visibilidad**: Público o Privado (ambos funcionan con Vercel)
   - **NO marques** "Initialize this repository with a README" (ya tienes archivos)
4. Haz clic en **"Create repository"**

## Paso 3: Subir tu código a GitHub

En la terminal, ejecuta estos comandos (GitHub te mostrará los comandos exactos después de crear el repo):

```bash
# Conecta tu repositorio local con GitHub
git remote add origin https://github.com/TU-USUARIO/pagina-personal.git

# Sube tu código
git branch -M main
git push -u origin main
```

**Nota**: Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

## Paso 4: Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Elige **"Continue with GitHub"** (o GitLab si prefieres)
4. Autoriza a Vercel a acceder a tus repositorios

## Paso 5: Importar tu proyecto en Vercel

1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio `pagina-personal` en la lista
3. Haz clic en **"Import"**

## Paso 6: Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Vue.js. Verifica:

- **Framework Preset**: Vue.js (debería estar automático)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `npm run build` (debería estar automático)
- **Output Directory**: `dist` (debería estar automático)

## Paso 7: Variables de entorno (si usas EmailJS)

Si tu proyecto usa variables de entorno (como EmailJS), agrégalas aquí:

1. En la sección **"Environment Variables"**
2. Agrega cada variable:
   - `VITE_EMAILJS_PUBLIC_KEY` = tu clave pública
   - `VITE_EMAILJS_SERVICE_ID` = tu service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = tu template ID

## Paso 8: Desplegar

1. Haz clic en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel:
   - Instala dependencias
   - Ejecuta el build
   - Despliega tu sitio
3. ¡Listo! Tu sitio estará disponible en una URL como:
   `https://pagina-personal.vercel.app`

## Paso 9: Configurar dominio personalizado (opcional)

1. En el dashboard de tu proyecto en Vercel
2. Ve a **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado si lo tienes

## ✅ ¡Listo!

Tu página estará en línea y cada vez que hagas `git push` a GitHub, Vercel desplegará automáticamente los cambios.

## 🔄 Actualizaciones futuras

Para actualizar tu sitio:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel desplegará automáticamente los cambios en 1-2 minutos.

