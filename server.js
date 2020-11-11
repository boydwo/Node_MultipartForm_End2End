const fs = require('fs')
const path = require('path')
const axios = require('axios')
const FormData = require('form-data')

const formData = new FormData()

const path_file = path.join(__dirname, '1605055886578.png')
const string = fs.createReadStream(path_file)
formData.append('files', string)

async function main (formData) {
  const service = axios.create({
    headers: {
      ...formData.getHeaders(),
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjb250YXRvQGlwZXRpcy5jb20uYnIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjA1MTI3MDMxLCJqdGkiOiJjODcwYTRiC0xOGUzLTRhNTctYjE1MS0wMTQ3M2JmNzI3Y2MiLCJjbGllbnRfaWQiOiJ0UERmMkNDc1JuN1pNb29oIn0.d105Z4x6pIE2F2eNEt0E8nhxUKoohIqhdYBK4CTwDJC0lqdJIbb0d_ZqWtQjMAB1rUm46bcofR-aKxOMEuj8UeBRKTCO6o893A3cMrVRM0zvkyZ1n5mghsMCL5z5ID5LEsAIEVqedkFtfNFJkBp-xqSyTD8M8T0L1BxBsXjhV7biMILguH3GqX8f3f8fHpWgGC4pAl-lGnGb6HbdnvcQ6BGB2fE4goDDwX8v397XfkQrNWx8ATY5_2_C9Xc1fcKC-s4NTiAXE-vTH4pzyZz-arfaFiCO9aFF_bCYhdHYvhHbIgXPJ3bdWisb_8bSzXj5zdjgYiCHS-8B03zP8gCJSw'
    },
    baseURL: 'https://api.testes/api-integration'
  })
  try {
    const response = await service.post('/files', formData)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

main(formData)
