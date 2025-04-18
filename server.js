const app = require("./app");
// const cors = require('cors');

const {testConnection} = require("./azure/index.js");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


console.log("AZURE_CONTAINER_NAME", process.env.AZURE_CONTAINER_NAME);
console.log("SAS_TOKEN", process.env.SAS_TOKEN);
console.log("AZURE_ACCOUNT_NAME", process.env.AZURE_ACCOUNT_NAME);