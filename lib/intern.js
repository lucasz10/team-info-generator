const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        //Error Catches 
        if(typeof name !== "string" || !name.trim().length){
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if(typeof email !== "string" || !email.trim().length){
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if(typeof school !== "string" || !school.trim().length){
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }   

        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;