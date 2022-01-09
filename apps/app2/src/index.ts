import service from '@openapi/service';

async function fetchData() {
  return service.login.login({
    username: 'admin',
    autoLogin: true,
    password: '11111'
  })
}

fetchData()
