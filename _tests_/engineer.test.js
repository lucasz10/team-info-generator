const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

describe("Engineer class", () => {
    describe("Initialization", () => {
        it("Creates an object with  name, id, and email properties", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.name).toEqual("Tammy");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("tammy@fakemail.com")
            expect(engineer.github).toEqual("github.com/tammytest")
        });
        //Error Catches
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();
      
            expect(cb).toThrow();
        });
        it("should throw an error if not provided an id", () => {
            const cb = () => new Engineer("Tammy", "tammy@fakemail.com", "github.com/tammytest");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Engineer(3, 2, "tammy@fakemail.com", "github.com/tammytest");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("Tammy", "1", "tammy@fakemail.com", "github.com/tammytest");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Engineer("Tammy", -1, "tammy@fakemail.com", "github.com/tammytest");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Engineer("Tammy", 1, 3, "github.com/tammytest");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Tammy", 1, "tammy@fakemail.com", 2);
            const err = new Error("Expected parameter 'github' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'github' is not provided", () => {
            const cb = () => new Engineer("Tammy", 1, "tammy@fakemail.com");
            const err = new Error("Expected parameter 'github' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
    })
    describe('getName method', () => {
        it("Returns the employee name as a string", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.getName()).toBe("Tammy")
        })
    })
    describe('getId method', () => {
        it("Returns the employee ID as an int", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.getId()).toBe(1)
        })
    })
    describe('getEmail method', () => {
        it("Returns the employee email as a string", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.getEmail()).toBe("tammy@fakemail.com")
        })
    })
    describe('getGithub method', () => {
        it("Returns the employees github URL", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.getGithub()).toBe("github.com/tammytest")
        })
    })
    describe('getRole method', () => {
        it("Returns the employees role", () => {
            const engineer = new Engineer("Tammy", 1, "tammy@fakemail.com", "github.com/tammytest")

            expect(engineer.getRole()).toBe("Engineer")
        })
    })
})