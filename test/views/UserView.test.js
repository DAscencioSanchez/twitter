const Userview = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test("Return an error object when try to create a new user in a null payload", () => {
        const payload = null
        const result = Userview.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })
})