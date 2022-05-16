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
const iv = MayTheForceBeWithYou;
// const iv = crypto.getRandomValues(new Uint8Array(16));

// This is the plaintext:
const encoder = new TextEncoder();
const message = encoder.encode('Hello world!');

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
