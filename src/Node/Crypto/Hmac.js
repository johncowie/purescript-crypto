"use strict";

import crypto from 'crypto';

const createHmacImpl = crypto.createHmac;

const updateImpl = function(buffer, hmac) {
  return hmac.update(buffer);
}

const digestImpl = function(hmac) {
  return hmac.digest();
}

export {createHmacImpl, updateImpl, digestImpl};
