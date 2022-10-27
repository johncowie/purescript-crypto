"use strict";

import crypto from 'crypto';

const createCipherivImpl = crypto.createCipheriv;

const updateImpl = function(buffer, cipher) {
  return cipher.update(buffer);
}

const finalImpl = function(cipher) {
  return cipher.final();
}

export {createCipherivImpl, updateImpl, finalImpl}
