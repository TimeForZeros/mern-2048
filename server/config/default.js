module.exports = {
  web: {
    port: 5000,
  },
  plugin: {
    code: 'lunar',
    name: 'Lunar Service',
  },
  database: {
    read: {
      dbName: 'IM_CMS_LUNAR',
      connection: {
        host: 'localhost',
        port: 27017,
      },
    },
  },
};
