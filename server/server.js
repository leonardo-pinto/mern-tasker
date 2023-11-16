const mongoose = require("mongoose");
const app = require("./app");
const { config } = require("./config");

(async () => {
  try {
    await mongoose.connect(config.mongoUri);
    app.listen(config.port, () =>
      console.log(`Server running on port ${config.port}`)
    );
  } catch (error) {
    console.error(
      `An error occurred while connecting to the dabatase: ${error}`
    );
  }
})();