const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum){
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

        if(typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0){
            throw new Error("Expected parameter 'office number' to be a non-negative number");
        } 
        
        super(name, id, email)
        this.officeNum = officeNum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;