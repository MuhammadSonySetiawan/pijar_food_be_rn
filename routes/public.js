const version = "/v1";

module.exports = [
  {
    path: `${version}/auth/login`,
    controllers: require("../controllers/Auth").login,
    validator: require("../controllers/Auth/validator").loginValidator, // global validator
    method: "post",
  },
  {
    path: `${version}/auth/register`,
    controllers: require("../controllers/Auth").register,
    validator: require("../controllers/Auth/validator").registerValidator, // global validator
    method: "post",
  },
  {
    path: `${version}/auth/logout/:id`,
    controllers: require("../controllers/Auth").logout,
    method: "get",
  },
  {
    path: `${version}/recipe/all`,
    controllers: require("../controllers/Recipes").getAllRecipe,
    method: "get",
  },
  {
    path: `${version}/recipe/detail/:id`,
    controllers: require("../controllers/Recipes").getSingleRecipe,
    method: "get",
  },
];
