
///ENCRYPTION
var crypto = require('crypto');

var creepy = function (clear){

    //random salt
    // let length = 16;
    // let salt = crypto.randomBytes(Math.ceil(length/2))
    // .toString('hex')
    // .slice(0, length);

    let salt = process.env.USER_SALT;

    //SHA
    let hash = createHmac("sha256", salt);
    hash.update(clear);
    return{
        salt : salt,  //this is the salt (needs a column on DB unique for each user)
        hash : hash.digest('hex') //this is the hashed string (goes in the DB on the password field)
    }

};

////VAR DECLARATION
var clearpass = "FOOBAR";  //this is the user password in plaintext
var creeped = creepy(clearpass);
console.log(creeped);


///VALIDATION
var validate = function (loginpass, hashedpass, salt){
    let hash = createHmac("sha256", salt); //could use sha512 too but for this example is too long
    hash.update(loginpass);
    loginpass = hash.digest("hex");

    return loginpass == hashedpass;
};


///CHECKING RESULTS
var validated = validate(/* "FOOBAR" */ clearpass, creeped.hash, creeped.salt);
console.log(clearpass);
console.log(validated ? "YES": "NO");

var otherpass = "avocado";
var validated = validate(otherpass /* clearpass */, creeped.hash, creeped.salt);
console.log(otherpass);
console.log(validated ? "YES": "NO");
