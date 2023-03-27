const axios = require('axios').default;
const FormData = require('form-data');
const fs = require('fs');

const filePath = './chihiro043.jpg';
const url = 'http://localhost:3000/auth/upload';

const formData = new FormData();
formData.append('file', fs.createReadStream(filePath));

console.log('Send request...');
axios.post(url, formData, {
  headers: {
    ...formData.getHeaders(),
  },
}).then(res => {
  console.log(res.data);
}).catch(error => {
  console.error('ERR', error.response.data);
});
