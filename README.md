# steel-web

Proyecto desarrollado como prueba técnica para la empresa `Steel software`. Consta de un servidor web creado bajo `Node.js` y una interfaz construida en `Vue.js`.

## Uso

Para hacer uso de la interfaz web se debe instalar las dependencias y configurar las variables de entorno, con esto estará listo para iniciar un servidor de desarrollo proveido por la herramienta [`Vite.js`](https://vitejs.dev), el cual es una utilidad para tener un servicio web el cual servirá nuestros archivos `.vue`, `.js` y `.ts`.

## Tecnologías

Este proyecto hace uso de `Vue.js` en su versión [`v3`](https://v3.vuejs.org) y [`Vite.js`](https://vitejs.dev) como herramienta de compilación y servicio web.

### Instalar dependencias

La instalación se realiza teniendo una versión de `Node.js` instalada en la maquina y haciendo uso del siguiente comando:

```bash
npm install
```

Luego de eso se puede proceder a configurar las variables de entorno

### Variables de entorno

Estas configuraciones se realizan mediante el uso de variables de entorno, que se establecen en un archivo `.env` dentro de la raiz del proyecto, con el siguiente contenido:

```env
VITE_API_URL = http://localhost:5000
```

> Donde la variable `VITE_API_URL` es la ruta a la [API](https://github.com/lorenacuadrox/Biblioteca-Steel) desarrollada en `Node.js`, la cual deberá estar ejecutandose en paralelo. Más información en [el repositorio del proyecto](https://github.com/lorenacuadrox/Biblioteca-Steel).

## Desarrollo

Para inicializar el servidor en modo de desarrollo una vez esté las dependencias instaladas y las variables de entorno configuradas, se ejecuta el siguiente comando: `npm run dev` que dará inicio a un servidor de desarrollo y permitirá usar la interfaz, donde mostrará la URL donde está alojado (normalmente en `http://localhost:3000`), se podrá acceder mediante un navegador web convencional (Google Chrome, Safari, Firefox o Edge).