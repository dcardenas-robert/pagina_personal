# 📧 Guía de Configuración de EmailJS

## 💰 Costos

EmailJS ofrece un **plan gratuito** que incluye:
- ✅ **200 emails por mes** (suficiente para proyectos personales)
- ✅ 2 servicios de email
- ✅ 2 plantillas de email
- ✅ Soporte básico

Para proyectos más grandes, tienen planes de pago desde $15/mes.

## 🚀 Pasos para Configurar EmailJS

### Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** y crea una cuenta gratuita
3. Confirma tu email

### Paso 2: Configurar un Servicio de Email

1. En el Dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Elige tu proveedor de email:
   - **Gmail** (recomendado para empezar)
   - Outlook
   - Yahoo
   - Otros proveedores SMTP
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Copia el Service ID** (lo necesitarás después) service_fzgaoko

### Paso 3: Crear una Plantilla de Email

1. Ve a **"Email Templates"** en el Dashboard
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estos campos:
   - **To Email**: Tu dirección de email donde recibirás los mensajes
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `Nuevo mensaje de contacto: {{subject}}`
   - **Content** (selecciona "HTML" como tipo de contenido): 
   
   > 💡 **Tip**: Puedes copiar la plantilla completa desde el archivo `emailjs-template.html` en la raíz del proyecto.
   
     ```html
     <div style="font-family: 'Inter', system-ui, -apple-system, sans-serif, Arial; font-size: 14px; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
       <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
         <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Nuevo Mensaje de Contacto</h1>
         <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">Has recibido un mensaje desde tu página personal</p>
       </div>
       
       <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
         <table role="presentation" style="width: 100%; border-collapse: collapse;">
           <tr>
             <td style="vertical-align: top; padding-right: 20px;">
               <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px;">
                 👤
               </div>
             </td>
             <td style="vertical-align: top; width: 100%;">
               <div style="margin-bottom: 8px;">
                 <strong style="color: #111827; font-size: 18px; font-weight: 600;">{{from_name}}</strong>
               </div>
               <div style="color: #6b7280; font-size: 13px; margin-bottom: 4px;">
                 📧 {{from_email}}
               </div>
               <div style="color: #9ca3af; font-size: 12px; margin-bottom: 16px;">
                 🕐 {{date}} {{time}}
               </div>
               <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 16px;">
                 <div style="color: #374151; font-size: 13px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                   Asunto:
                 </div>
                 <div style="color: #111827; font-size: 16px; font-weight: 500; margin-bottom: 20px;">
                   {{subject}}
                 </div>
                 <div style="color: #374151; font-size: 13px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                   Mensaje:
                 </div>
                 <p style="color: #111827; font-size: 15px; margin: 0; white-space: pre-wrap; word-wrap: break-word;">{{message}}</p>
               </div>
             </td>
           </tr>
         </table>
       </div>
       
       <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
         <p style="color: #6b7280; font-size: 12px; margin: 0;">
           Este mensaje fue enviado desde el formulario de contacto de tu página personal
         </p>
       </div>
     </div>
     ```
   
   **Nota importante**: Para que la fecha y hora se muestren correctamente, necesitas agregar estas variables en el campo "Settings" de la plantilla:
   - Variable `date`: `{{date}}` (EmailJS la genera automáticamente)
   - Variable `time`: `{{time}}` (EmailJS la genera automáticamente)
   
   Si prefieres no usar fecha/hora, puedes eliminar la línea que contiene `🕐 {{date}} {{time}}` de la plantilla.
4. **Copia el Template ID** (lo necesitarás después)

### Paso 4: Obtener tu Public Key

1. Ve a **"Account"** > **"General"**
2. Busca la sección **"API Keys"**
3. **Copia tu Public Key**

### Paso 5: Configurar las Variables de Entorno

1. **Crea el archivo `.env`** en la raíz del proyecto:
   
   - Si existe el archivo `.env.example`, puedes copiarlo:
     ```bash
     cp .env.example .env
     ```
   
   - Si no existe, crea un nuevo archivo llamado `.env` en la raíz del proyecto

2. **Abre el archivo `.env`** y reemplaza los valores con tus credenciales:

```env
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

   > 💡 **Nota**: Reemplaza `tu_public_key_aqui`, `tu_service_id_aqui` y `tu_template_id_aqui` con los valores reales que obtuviste en los pasos anteriores.

### Paso 6: Probar el Formulario

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a la sección de contacto en tu página
3. Llena el formulario y envía un mensaje de prueba
4. Revisa tu bandeja de entrada para confirmar que recibiste el email

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo `.env` a Git
- El archivo `.env` ya está en `.gitignore` para proteger tus credenciales
- La Public Key es segura de exponer en el frontend (es pública por diseño)

## ❓ Solución de Problemas

### El formulario no envía emails

1. Verifica que las variables de entorno estén correctamente configuradas
2. Asegúrate de que los nombres de las variables en la plantilla coincidan:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
3. Revisa la consola del navegador para ver errores
4. Verifica que tu cuenta de EmailJS no haya alcanzado el límite de 200 emails/mes

### Error: "Invalid Public Key"

- Verifica que copiaste correctamente la Public Key desde el Dashboard
- Asegúrate de que no hay espacios extra al inicio o final

### Error: "Service ID not found"

- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en el Dashboard

## 📚 Recursos

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Guía de integración con Vue](https://www.emailjs.com/docs/examples/vuejs/)

