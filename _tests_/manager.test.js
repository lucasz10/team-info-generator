const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

describe("Manager class", () => {
    describe("Initialization", () => {
        it("Creates an object with  name, id, and email properties", () => {
            const manager = new Manager("Tammy", 1, "tammy@fakemail.com", 1)

            expect(manager.name).toEqual("Tammy");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("tammy@fakemail.com")
            expect(manager.officeNum).toEqual(1)
        });
        //Error Catches
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Manager();
      
            expect(cb).toThrow();
        });
        it("should throw an error if not provided an id", () => {
            const cb = () => new Manager("Tammy", "tammy@fakemail.com", 1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Manager(3, 2, "tammy@fakemail.com", 1);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Manager("Tammy", "1", "tammy@fakemail.com", 1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Manager("Tammy", -1, "tammy@fakemail.com", 1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Manager("Tammy", 1, 3, 1);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'office number' is not a number", () => {
            const cb = () => new Manager("Tammy", 1, "tammy@fakemail.com", "2");
            const err = new Error("Expected parameter 'office number' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'office number' is not provided", () => {
            const cb = () => new Manager("Tammy", 1, "tammy@fakemail.com");
            const err = new Error("Expected parameter 'office number' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
    })
    describe('getName method', () => {
        it("Returns the employee name as a string", () => {
            const manager = new Manager("Tammy", 1, "tammy@fakemail.com", 1)

            expect(manager.getName()).toBe("Tammy")
        })
    })
    describe('getId method', () => {
        it("Returns the employee ID as an int", () => {
            const manager = new Manager("Tammy", 1, "tammy@fakemail.com", 1)

            expect(manager.getId()).toBe(1)
        })
    })
    describe('getEmail method', () => {
        it("Returns the employee email as a string", () => {
            const manager = new Manager("Tammy", 1, "tammy@fakemail.com", 1)

            expect(manager.getEmail()).toBe("tammy@fakemail.com")
        })
    })
    describe('getRole method', () => {
        it("Returns the employees role", () => {
            const manager = new Manager("Tammy", 1, "tammy@fakemail.com", 1)

            expect(manager.getRole()).toBe("Manager")
        })
    })
})