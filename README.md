# 🚀 Teikit Frontend - React App

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) y utiliza **Yarn** como gestor de paquetes.

## 📦 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `yarn start`

Ejecuta la app en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recarga automáticamente al hacer cambios.\
También verás errores de lint en la consola si los hay.

---

### `yarn test`

Lanza el test runner en modo interactivo.\
Más información en la [documentación oficial de pruebas](https://facebook.github.io/create-react-app/docs/running-tests).

---

### `yarn build`

Crea un build de producción en la carpeta `build/`.\
Optimiza React en modo producción y minifica los archivos.

Los archivos resultantes están listos para ser desplegados.\
Más detalles sobre el despliegue en la [documentación de CRA](https://facebook.github.io/create-react-app/docs/deployment).

---

### `yarn eject`

⚠️ **Advertencia: esta acción es irreversible.**

Este comando expone toda la configuración del proyecto (Webpack, Babel, ESLint, etc). Solo se recomienda si necesitas un control completo del entorno de desarrollo.

---

## 📘 Recursos adicionales

- [Guía de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentación oficial de React](https://reactjs.org/)
- [Cómo hacer Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analizar el tamaño del bundle](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Hacer una PWA (Progressive Web App)](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Configuraciones avanzadas](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Solución a errores de minificación](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## ⚠️ Importante: Uso exclusivo de Yarn

Este proyecto utiliza **Yarn**. Si alguna vez ejecutaste `npm install`, ejecuta los siguientes comandos para limpiar conflictos:

```bash
rm -rf node_modules package-lock.json
yarn install
