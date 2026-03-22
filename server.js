const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const pool = new Pool({
   connectionString:
process.env.postgresql://postgres:[etg9cqIHIElQ8GVc]@db.hflqpqxaxisjxiubfrya.supabase.co:5432/postgres
   ssl:{rejectUnauthorized:false}
});

app.post("/contact", async (req, res) => {

const { name, email, message } = req.body;

try {

await pool.query(
"INSERT INTO contacts (name,email,message) VALUES ($1,$2,$3)",
[name,email,message]
);

res.send("Message stored successfully");

} catch (err) {

console.error(err);
res.send("Error storing data");

}

});

app.listen(3000, () => {
console.log("Server running on port 3000");
});