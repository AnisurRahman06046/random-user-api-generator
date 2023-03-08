require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.sendFile(__dirname+"/views/index.html");
});
app.listen(PORT, () => {
  console.log(`server is running from ${PORT}`);
});
