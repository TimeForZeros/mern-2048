module.exports = {
  web: {
    port: 3091,
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
