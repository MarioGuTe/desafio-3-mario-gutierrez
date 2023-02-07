const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mariogt",
  database: "likeme",
  allowExitOnIdle: true,
});

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, img, descripcion];
  // console.log(values);
  const result = await pool.query(consulta, values);
  // console.log("***");
  // console.log(result);
  console.log("post agregado");
};

const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

module.exports = { agregarPost, obtenerPosts };
