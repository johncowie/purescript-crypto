"use strict";

import crypto from 'crypto';

const createHashImpl = crypto.createHash;

const updateImpl = function(buffer, hash) {
  return hash.update(buffer);
}

const digestImpl = function(hash) {
  return hash.digest();
}

export {createHashImpl, updateImpl, digestImpl};
