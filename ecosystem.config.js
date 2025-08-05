module.exports = {
  apps: [
    {
      name: 'nuxtSSR',
      version: '2.0.0',
      script: '.output/server/index.mjs',
      // args: 'start',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        PORT: 3000,
        HOST: '127.0.0.1'
      }
    }
  ]
}
