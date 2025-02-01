// Explanation of the Regex Patterns that i used :

1. **Visa (`/^4[0-9]{12}(?:[0-9]{3})?$/`)**

   - Starts with `4`.
   - Contains 13 or 16 digits.

2. **Mastercard (`/^5[1-5][0-9]{14}$/`)**

   - Starts with `51-55`.
   - Must be 16 digits long.

3. **American Express (`/^3[47][0-9]{13}$/`)**

   - Starts with `34` or `37`.
   - Must be 15 digits long.

4. **Discover (`/^6(?:011|5[0-9]{2})[0-9]{12}$/`)**

   - Starts with `6011` or `65`.
   - Must be 16 digits long.

     THANKS SO MUCH
#   C a r d V a l i d a t i o n  
 