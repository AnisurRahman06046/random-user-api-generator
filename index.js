require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("api is running");
});
app.listen(PORT, () => {
  console.log(`server is running from ${PORT}`);
});
