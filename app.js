const hola = {
  data() {
    return {
      name: "Pablo Ortiz",
      apellido: "<h1> Ortiz G </h1>", // crear elemento h1 en el DOM
      age: 10, // condicion para  v-show (Valor true o false)
      gender: "O",
      animals: ["Gato", "Perro", "Pájaro", "Dinosaurio"],
      loginType: "username",
      counter: 0,
      img: "https://placeimg.com/400/400/people",
      alt: "Logo",
    };
 
  
};
Vue.createApp(hola).mount("#app");