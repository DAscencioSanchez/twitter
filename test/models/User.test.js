const User = require('./../../app/models/User')

describe("Prueva de jest ", () => {
    test('Prueba 1', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "dateUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("dateUpdated")
    })
})
