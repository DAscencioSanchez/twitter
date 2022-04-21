const User = require('./../../app/models/User')

describe("Prueva de jest ", () => {
    test('Requerimento 1: Creacion de User', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "dateUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("dateUpdated")
    })

    test("Requerimento 2: Fechas en attributos de User", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "dateUpdated")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
})
