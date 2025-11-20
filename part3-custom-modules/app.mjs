// app.mjs - ES Modules Demonstration

// Import the default export and named export from user.mjs
import createUser, { User } from './user.mjs';

// Import named exports from validator.mjs
import { validateEmail, validateAge, validateName } from './validator.mjs';

console.log('=== ES Modules Demonstration ===\n');

// ===== USER CREATION =====
console.log('--- Creating Users ---\n');

// Create User 1 using the default export factory function
const user1 = createUser('Ibrahim khan', 'ibrahim.khan@email.com', 28);
console.log('User 1 created using createUser() factory:');
console.log(`  ${user1.getDetails()}`);
console.log(`  Is Adult? ${user1.isAdult()}`);

// Create User 2 using the User class directly
const user2 = new User('khan', 'khan@example.com', 16);
console.log('\nUser 2 created using User class:');
console.log(`  ${user2.getDetails()}`);
console.log(`  Is Adult? ${user2.isAdult()}`);

// ===== VALIDATION =====
console.log('\n--- Validating User Information ---\n');

// Validate User 1
console.log('Validating User 1 (Alice Johnson):');
const user1NameValid = validateName(user1.name);
const user1EmailValid = validateEmail(user1.email);
const user1AgeValid = validateAge(user1.age);

console.log(`  Name "${user1.name}": ${user1NameValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Email "${user1.email}": ${user1EmailValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Age ${user1.age}: ${user1AgeValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Overall: ${user1NameValid && user1EmailValid && user1AgeValid ? '✓ All Valid' : '✗ Has Invalid Fields'}`);

// Validate User 2
console.log('\nValidating User 2 (Bob Smith):');
const user2NameValid = validateName(user2.name);
const user2EmailValid = validateEmail(user2.email);
const user2AgeValid = validateAge(user2.age);

console.log(`  Name "${user2.name}": ${user2NameValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Email "${user2.email}": ${user2EmailValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Age ${user2.age}: ${user2AgeValid ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Overall: ${user2NameValid && user2EmailValid && user2AgeValid ? '✓ All Valid' : '✗ Has Invalid Fields'}`);

// ===== TESTING INVALID DATA =====
console.log('\n--- Testing Invalid Data ---\n');

// Test invalid email
const invalidEmail = 'not-an-email';
console.log(`Email "${invalidEmail}": ${validateEmail(invalidEmail) ? '✓ Valid' : '✗ Invalid'}`);

// Test invalid age
const invalidAge = 150;
console.log(`Age ${invalidAge}: ${validateAge(invalidAge) ? '✓ Valid' : '✗ Invalid'}`);

// Test empty name
const emptyName = '   ';
console.log(`Name "${emptyName}": ${validateName(emptyName) ? '✓ Valid' : '✗ Invalid'}`);

// ===== CREATE AND VALIDATE ADDITIONAL USER =====
console.log('\n--- Creating User with Invalid Data ---\n');

const user3 = createUser('', 'invalid-email', 130);
console.log('User 3 created with invalid data:');
console.log(`  ${user3.getDetails()}`);

console.log('\nValidating User 3:');
console.log(`  Name: ${validateName(user3.name) ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Email: ${validateEmail(user3.email) ? '✓ Valid' : '✗ Invalid'}`);
console.log(`  Age: ${validateAge(user3.age) ? '✓ Valid' : '✗ Invalid'}`);

// ===== SUMMARY =====
console.log('\n--- Summary ---');
const users = [
    { user: user1, name: 'User 1 (ibrahim)', nameValid: user1NameValid, emailValid: user1EmailValid, ageValid: user1AgeValid },
    { user: user2, name: 'User 2 (khan)', nameValid: user2NameValid, emailValid: user2EmailValid, ageValid: user2AgeValid }
];

users.forEach(({ user, name, nameValid, emailValid, ageValid }) => {
    const allValid = nameValid && emailValid && ageValid;
    console.log(`${name}: ${allValid ? '✓ Valid' : '✗ Invalid'} | Adult: ${user.isAdult() ? 'Yes' : 'No'}`);
});

console.log('\n=== ES Modules Demonstration Complete ===');
