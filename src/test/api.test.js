const form = require('../models/index.model')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)


test('Get form', async () => {
    await api
        .get('/form/allforms')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('POST form', async () => {
    const newForm = {
        firstname:"Test",
        lastname: "Jest",
        email: "teste@jest"
    }

    await api
        .post('/form/createform')
        .send(newForm)
        .expect(201)

})

test('UPDATE form', async () => {
    const newFormUpdate = {
        id: 2,
        firstname:"Test",
        lastname: "Jest",
        email: "teste@jest"
    }
    await api
        .put('form/updateform')
        .send(newFormUpdate)
        .expect(201)


})

test('DELETE form', async () => {
    await api
        .del('/form/deleteform/2')
        .expect(204)
})