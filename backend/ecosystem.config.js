module.exports = {
  apps: [
    {
      name: 'dice_server',
      script: './index.js',
      exec_interpreter: 'babel-node',
      instances: -1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      source_map_support: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
        ORIGIN_HEADER:
          'http://localhost:3000,http://127.0.0.1,http://localhost,http://127.0.0.1:80',
        SECRET_KEY: 'aGVsbG8gZGljZQ==',
      },
    },
  ],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
