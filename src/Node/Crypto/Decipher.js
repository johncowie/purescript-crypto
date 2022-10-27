"use strict";

import crypto from 'crypto';

const createDecipherivImpl = crypto.createDecipheriv;

const updateImpl = function(buffer, decipher) {
  return decipher.update(buffer);
}

const finalImpl = function(decipher) {
  return decipher.final();
}

export {createDecipherivImpl, updateImpl, finalImpl}
