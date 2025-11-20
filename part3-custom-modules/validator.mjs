// validator.mjs - Validation Module (ES Modules)

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format, false otherwise
 */
export function validateEmail(email) {
    // Check if email is a string and not empty
    if (typeof email !== 'string' || email.trim() === '') {
        return false;
    }

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate age (must be between 0 and 120)
 * @param {number} age - Age to validate
 * @returns {boolean} - True if valid age, false otherwise
 */
export function validateAge(age) {
    // Check if age is a number
    if (typeof age !== 'number' || isNaN(age)) {
        return false;
    }

    // Check if age is within valid range (0-120)
    return age >= 0 && age <= 120;
}

/**
 * Validate name (must not be empty)
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name, false otherwise
 */
export function validateName(name) {
    // Check if name is a string and not empty after trimming
    //se whitespace remove hoti hai
    if (typeof name !== 'string') {
        return false;
    }

    const trimmedName = name.trim();
    return trimmedName.length > 0;
}
