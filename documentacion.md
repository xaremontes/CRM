# Documentación CRM

## Composición del proyecto
```
Este Sistema CRM esta diseñado para ser utilizado por una empresa, el cual tiene como objetivo la gestión de Compras, Contactos, Negocios y Tickets.
El proyecto es un SPA (Single Page Aplictaion), que significa aplicación de una sola página. Esto con el fin de brindar una experiencia fluida al usuario. 
Las SPA, cuando cargan la página inicial, descagran los recurosos necesarios que son archivos HTML, CSS y JavaScript. Y después cuando se quieran ir mostrando más pantallas y datos solo se actualizará lo necesario, sin necesidad de cargar toda la página nuevamente.
```

## Especificaciones técnicas de la aplicación CRM
### Características principales del sistema de autenticación:

```
- Login con credenciales: admin@crm.com / admin123
- Gestión de sesiones con localStorage
- Protección de rutas
```
### Módulos implementados
```
1. Dashboard - Resumen general con estadísticas y accesos rápidos
2. Compras - Gestión de órdenes de compra con proveedores
3. Contactos - Administración de contactos empresariales
4. Negocios - Seguimiento de oportunidades de venta
5. Tickets - Sistema de soporte y tickets
```
### Funcionalidades 
```
- Navegación por hash routing
- Formularios modales para crear nuevos registros
- Tablas responsivas con datos de ejemplo
- Estados visuales con badges de colores
- Diseño responsivo con Bootstrap y Tailwind
- Iconos Font Awesome
- Animaciones y efectos hover
```
## Tecnologías utilizadas
```
- React 18 (producción)
- Bootstrap 5.3
- TailwindCSS
- Font Awesome 6.5
- CSS personalizado con gradientes
```
# Cambios requeridos
## Dropdown del Administrador funcional:
```
- Avatar del usuario con imagen de perfil
- Información detallada en el dropdown:
    - Nombre y email del usuario
    - Opción "Mi Perfil" 
    - Opción "Configuración"
    - Confirmación antes de cerrar sesión
```
## Modal de Perfil completo:
```
- Foto de perfil grande
- Información personal detallada
- Estado del usuario y último acceso
- Rol con badge visual
```
## Fotos en contactos:
### Mejoras visuales:
```
- Avatares reales de Unsplash para cada contacto
- Diseño centrado con foto circular prominente
- Iconos coloridos para email, teléfono y empresa
- Nuevos contactos incluyen avatar automáticamente
```
### Características Técnicas:
```
- Bootstrap JS agregado para dropdowns funcionales
- Imágenes optimizadas con parámetros de Unsplash
- Componente UserProfile modular y reutilizable
- Confirmación de cierre de sesión por seguridad
- Diseño responsive mejorado
```
# Pasos para compliar proyecto
Encontré dos formas de hacer esto, las explico a continuación:

## Ejecutar con Node.js 
1. Crear un archivo llamado 'package.json' con el siguiente comando
```
npm init -y
```
2. Instalar express
```
npm install express
```
3. Y ejecutar el servidor
```
node app.js
```
Ahora, si todo esta bien ejecutado, debría de aparecer algo como esto:
```
Servidor escuchando en el puerto 3000
```
Y ya por último para acceder a la página debemos de poner esto en nuestro navegador:
```
http://localhost:3000/
```
Para la segunda forma
## Servidor estático con http-server
1. Instalar http-server, este paso solo se hace una vez 
```
npm install -g http-server

```
2. Navegar a la carpeta donde se encuentra el archivo index y ejecutar el servidor
```
http-server
```
3. Y saldrá algo como esto:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.10.0/
```
4. Y para acceder localmente pegas la primer línea que te arrojó la terminal, ya que la otra es para acceder desde otro dispositivo con el mismo wifi