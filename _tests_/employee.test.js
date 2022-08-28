const Employee = require('../lib/employee')

describe('Employee class', () => {
    describe("Initialization", () => {
        it("Creates an object with  name, id, and email properties", () => {
            const employee = new Employee("Tammy", 1, "tammy@fakemail.com")

            expect(employee.name).toEqual("Tammy");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("tammy@fakemail.com")
        });
        //Error Catches
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
      
            expect(cb).toThrow();
        });
        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Tammy", "tammy@fakemail.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 2, "tammy@fakemail.com" );
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Tammy", "1", "tammy@fakemail.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("Tammy", -1, "tammy@fakemail.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Tammy", 1, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not provided", () => {
            const cb = () => new Employee("Tammy", 1,);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
    })
    describe('getName method', () => {
        it("Returns the employee name as a string", () => {
            const employee = new Employee("Tammy", 1, "tammy@fakemail.com")

            expect(employee.getName()).toBe("Tammy")
        })
    })
    describe('getId method', () => {
        it("Returns the employee ID as an int", () => {
            const employee = new Employee("Tammy", 1, "tammy@fakemail.com")

            expect(employee.getId()).toBe(1)
        })
    })
    describe('getName method', () => {
        it("Returns the employee email as a string", () => {
            const employee = new Employee("Tammy", 1, "tammy@fakemail.com")

            expect(employee.getEmail()).toBe("tammy@fakemail.com")
        })
    })
});