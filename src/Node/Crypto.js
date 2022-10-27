"use strict";

import crypto = from 'crypto';

const timingSafeEqualImpl = crypto.timingSafeEqual;

const randomBytesImpl = crypto.randomBytes;

const scryptImpl = function(password, salt, keylen) {
  return function(onError, onSuccess) {
    crypto.scrypt(password, salt, keylen, function(err, key) {
      if (err) {
        onError(err);
      } else {
        onSuccess(key);
      }
    });
    return function(cancelError, onCancelerError, onCancelerSuccess) {
      onCancelerSuccess({});
    }
  }
}

const scryptSyncImpl = crypto.scryptSync;

export {timingSafeEqualImpl, randomBytesImpl, scryptImpl, scryptSyncImpl}
