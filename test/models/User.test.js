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

    test("Requerimento3: agregando getters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "dateUpdated")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()

    })

    test("Requerimento4: agregando setters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "dateUpdated")
        user.setUsername = "cgilmar"
        expect(user.username).toBe("cgilmar")
        
    })

})
