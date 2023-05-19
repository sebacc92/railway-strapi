module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '190.228.29.62'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'erconsrl_db'),
      user: env('DATABASE_USERNAME', 'sebacardoso'),
      password: env('DATABASE_PASSWORD', '&8cN@T$7sQ2#6jKx'),
      ssl: {
        ca: env.bool('DATABASE_CA')
      },
    },
    debug: false,
  },
});
