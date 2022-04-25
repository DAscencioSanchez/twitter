const Userview = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test("Return an error object when try to create a new user in a null payload", () => {
        const payload = null
        const result = Userview.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error objecto when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = Userview.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor valido/)
    })
})