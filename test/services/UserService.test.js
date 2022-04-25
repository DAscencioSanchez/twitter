const User = require('../../app/models/User')
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () =>  {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

    test("2. Get all user data in a list", () =>  {
        const user = UserService.create(1, "carlogilmar", "carlo")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
    
    })

    test("3. Update Username", () =>  {
        const user = UserService.create(1, "carlogilmar", "carlo")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")    
    })

    test("4. Given a list of users give me the list of usernames", () =>  {
        const user1 = UserService.create(1, "carlogilmar1", "carlo1")
        const user2 = UserService.create(2, "carlogilmar2", "carlo2")
        const user3 = UserService.create(3, "carlogilmar3", "carlo3")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("carlogilmar1") 
        expect(usernames).toContain("carlogilmar2")  
        expect(usernames).toContain("carlogilmar3")        
    })
})