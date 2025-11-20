// user.mjs - User Module (ES Modules)

/**
 * User class with properties and methods
 */
export class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    /**
     * Get user details as a formatted string
     * @returns {string} - User details
     */
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }

    /**
     * Check if user is an adult (18 or older)
     * @returns {boolean} - True if adult, false otherwise
     */
    isAdult() {
        return this.age >= 18;
    }
}

/**
 * Factory function to create a new User instance
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {number} age - User's age
 * @returns {User} - New User instance
 */
export default function createUser(name, email, age) {
    return new User(name, email, age);
}
