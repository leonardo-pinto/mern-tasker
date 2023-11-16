const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://atlasAdmin:mpVxAnBxsONOY9dY@cluster0.vcv1smx.mongodb.net/?retryWrites=true&w=majority",
};

module.exports = { config };
