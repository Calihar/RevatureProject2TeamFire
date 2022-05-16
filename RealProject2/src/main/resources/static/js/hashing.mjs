
import crypto from 'crypto';

// var crypto = require("crypto");
// var cryptog = require("crypto");
// var encrypt = function (clear) {
export function encrypt (clear) {
  let salt = process.env.USER_SALT;

  //SHA
  let hash = crypto.createHmac("sha256", salt);
  hash.update(clear);
  return {
    salt: salt, //this is the salt (needs a column on DB unique for each user)
    hash: hash.digest("hex"), //this is the hashed string (goes in the DB on the password field)
  };
};


    var clearpass = "avocado";  //this is the user password in plaintext    
    var encrypted = encrypt(clearpass);
    var userPassword = encrypted.hash;

    console.log(userPassword);