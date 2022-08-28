const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

describe("Intern class", () => {
    describe("Initialization", () => {
        it("Creates an object with  name, id, and email properties", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.name).toEqual("Tammy");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("tammy@fakemail.com")
            expect(intern.school).toEqual("ASU")
        });
        //Error Catches
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();
      
            expect(cb).toThrow();
        });
        it("should throw an error if not provided an id", () => {
            const cb = () => new Intern("Tammy", "tammy@fakemail.com", "ASU");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(3, 2, "tammy@fakemail.com", "ASU");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Tammy", "1", "tammy@fakemail.com", "ASU");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Intern("Tammy", -1, "tammy@fakemail.com", "ASU");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern("Tammy", 1, 3, "ASU");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Intern("Tammy", 1, "tammy@fakemail.com", 2);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'github' is not provided", () => {
            const cb = () => new Intern("Tammy", 1, "tammy@fakemail.com");
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
    })
    describe('getName method', () => {
        it("Returns the employee name as a string", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.getName()).toBe("Tammy")
        })
    })
    describe('getId method', () => {
        it("Returns the employee ID as an int", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.getId()).toBe(1)
        })
    })
    describe('getEmail method', () => {
        it("Returns the employee email as a string", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.getEmail()).toBe("tammy@fakemail.com")
        })
    })
    describe('getSchool method', () => {
        it("Returns the employees school", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.getSchool()).toBe("ASU")
        })
    })
    describe('getRole method', () => {
        it("Returns the employees role", () => {
            const intern = new Intern("Tammy", 1, "tammy@fakemail.com", "ASU")

            expect(intern.getRole()).toBe("Intern")
        })
    })
})