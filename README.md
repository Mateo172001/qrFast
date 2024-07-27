# QRFast

QRFast es una aplicación web para generar códigos QR de manera fácil y rápida. Esta aplicación está construida con React, TypeScript y Vite, y utiliza varias bibliotecas para mejorar la experiencia del usuario.

## Características

- Generación de códigos QR personalizados
- Selección de colores para el código QR y el fondo
- Ajuste de los márgenes y el radio de las esquinas del código QR
- Descarga de la imagen del código QR generado

## Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [MUI (Material-UI)](https://mui.com/)
- [react-qr-code](https://github.com/rosskhanas/react-qr-code)
- [react-colorful](https://github.com/omgovich/react-colorful)
- [html-to-image](https://github.com/bubkoo/html-to-image)
- [Tailwind CSS](https://tailwindcss.com/)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu-usuario/qrfast.git
    cd qrfast
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `npm run preview`: Previsualiza la aplicación compilada.

## Estructura del Proyecto

```plaintext
.eslintrc.cjs
.gitignore
index.html
package.json
postcss.config.js
public/
README.md
src/
    App.css
    App.tsx
    assets/
        Logo.tsx
    helpers/
        contrastColor.ts
        downloadImgFromContainer.tsx
    index.css
    main.tsx
    pages/
        Home.tsx
    vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts