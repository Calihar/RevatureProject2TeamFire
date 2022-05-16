

async function myEncryptionFunc() {
  
  const key = await crypto.subtle.generateKey(
    // The algorithm is AES in CBC mode, with a key length
    // of 256 bits.
    {
      name: 'AES-CBC',
      length: 256
    },
    // Allow extracting the key material (see below).
    true,
    // Restrict usage of this key to encryption.
    ['encrypt']
  );

  
  // AES-CBC requires a 128-bit initialization vector (iv).
  // const iv = "MayTheForceBeWithYou";
  // const iv = crypto.getRandomValues(new Uint8Array(16));
  const iv =  new Uint8Array(16);
  iv[0] = 128;
  iv[1] = 179;
  iv[2] = 80;
  iv[3] = 25;
  iv[4] = 46;
  iv[5] = 94;
  iv[6] = 76;
  iv[7] = 18;
  iv[8] = 60;
  iv[9] = 138;
  iv[10] = 150;
  iv[11] = 212;
  iv[12] = 50;
  iv[13] = 143;
  iv[14] = 74;
  iv[15] = 252;
  
  
  

  
  
  // This is the plaintext:
  const encoder = new TextEncoder();
  // const message = encoder.encode('Hello world!');
  // const message = encoder.encode('passwordlmao');
  const message = encoder.encode('avocado');
  
  // Finally, encrypt the plaintext, and obtain the ciphertext.
  const ciphertext = await crypto.subtle.encrypt(
    // The algorithm is still AES-CBC. In addition, the
    // 128-bit initialization vector must be specified.
    {
      name: 'AES-CBC',
      iv
    },
    // The encryption key. This must be an AES-CBC key,
    // otherwise, this function will reject.

    key,
    

    // The plaintext to encrypt.
    message
  );

    console.log("iv: "+iv);
    console.log(typeof iv);
    console.log(ciphertext);
    console.log(message.toString());

}

 
myEncryptionFunc();



  




