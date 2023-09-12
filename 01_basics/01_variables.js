const accountId = 123456
let accountEmail = "kamal@gmail.com"
var accountPassword = "123445"
accountCity = "Vadodara"

// accountId = 1

/*
Prefer not to use VAR
Because of issue in Block scope and functional scope
*/

accountEmail = "kamal@yahoo.com"
accountPassword = "123445"
accountCity = "Baroda"
let accountState;

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])