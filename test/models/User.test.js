const User = require('./../../app/models/User')

describe("Prueva de jest ", () => {
    test('Prueba 1', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.name).toBe("carlogilmar")
    })
})
