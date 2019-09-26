module.exports = {
  presets: [
    "@babel/preset-env", // Altera as funcionalidades do javascript que o navegador ainda não entende. Import, export,...
    "@babel/preset-react" // Altera as funcionalidades do javascript que o navegador ainda não entende. JSX...
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
