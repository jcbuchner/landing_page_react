### Iniciar projecto con npm

    $ npm init -y

### Instalar webpack y webpack-cli

    $ npm i webpack webpack-cli --save-dev

### Crear archivo de configuracion de webpack y aplicacion

    - src/index.js
    - public/index.html
    - webpack.config.js
    - .babelrc
    - .gitignore

### Instalar babel, react y configurar webpack

    $ npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties react react-dom --save-dev

### Instalar loaders para CSS, SASS, FILES, Minificadores CSS

    $ npm i css-loader style-loader sass sass-loader file-loader mini-css-extract-plugin --save-dev

### Instalar html-webpack-plugin en dev para combinar nuestros archivos con el index.html

    $ npm i html-webpack-plugin --save-dev

### Instalar clean-webpack-plugin en dev para limpiar nuestros archivos de salida

    $ npm i clean-webpack-plugin --save-dev

### Instalar webserver para visualizar el proyecto

    $ npm i webpack-dev-server --save-dev