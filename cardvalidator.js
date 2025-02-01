// This function validates credit card numbers based on regex patterns for different types
function validateCreditCard(cardNumber) {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa: Starts with 4, 13 or 16 digits
        mastercard: /^5[1-5][0-9]{14}$/, // Mastercard: Starts with 51-55, 16 digits
        amex: /^3[47][0-9]{13}$/, // American Express: Starts with 34 or 37, 15 digits
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/, // Discover: Starts with 6011, 65, 16 digits
    };
    
    let matchedCard = null;
    for (const cardType in cardPatterns) {
        if (cardPatterns[cardType].test(cardNumber)) {
            matchedCard = cardType;
            break;
        }
    }
    
    return matchedCard ? `Card Is Valid => {  ${matchedCard.toUpperCase()} card, Card Number ${cardNumber} }` : `Invalid credit card number  try again  Card Number ${cardNumber}`;
}

// Example Usage
console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5105105105105100")); // Mastercard
console.log(validateCreditCard("378282246310005")); // Amex
console.log(validateCreditCard("6011111111111117")); // Discover
console.log(validateCreditCard("1011111111111117")); // Discover
