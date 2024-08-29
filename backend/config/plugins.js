module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      // provider: "@strapi/provider-upload-cloudinary",
      // providerOptions: {
      //   cloud_name: env("CLOUDINARY_NAME"),
      //   api_key: env("CLOUDINARY_KEY"),
      //   api_secret: env("CLOUDINARY_SECRET"),
      // },
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000 // Limit size to 1MB, adjust as needed
      },  
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
