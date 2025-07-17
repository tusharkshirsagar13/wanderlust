const cloudinary = require("cloudinary").v2;
const {
  cloudStrorage,
  CloudinaryStorage,
} = require("multer-storage-cloudinary");
const { param } = require("./routes/listing");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  param: {
    folder: "wanderlust_DEV",
    allowedFormats: ["jpeg", "jpg", "png"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
