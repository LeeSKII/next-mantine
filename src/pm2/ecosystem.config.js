module.exports = {
    apps : [{
      name: 'My-Next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 7778', //running on port 3000
      instances: 1,
      watch: false,   
    }]
  };