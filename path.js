const path = require("path");

// console.log(__dirname); // directory name with absolute path
// console.log(__filename); // filename with absolute path

// console.log("path :", path.basename(__dirname)); // filename with absolute path
// console.log(path.isAbsolute("../Export/relationalPath.js"));
// console.log(path.isAbsolute(__filename));

// console.log(path.join(__dirname, "a", "s"));
// console.log(path.resolve(__dirname, "a/b", "s"));

// console.log(
//   path.parse(
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fhills%2F&psig=AOvVaw2UgunY6QkhtC9TpXxTt0Iz&ust=1653744420291000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjhq5jk__cCFQAAAAAdAAAAABAD"
//   )
// ); // path parser

const pathObj = {
  root: "/desktop/user",
  dir: "images",
  base: "photo.jpg",
  ext: ".jpg",
  name: "photo",
};
console.log(path.format(pathObj));
