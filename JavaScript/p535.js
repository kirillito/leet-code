/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
// apparently hash function solution
// is unnecessary and just slow compared to counter solution
// this beats ~99% other solutions
const encodeMap = new Map();
const decodeMap = new Map();

var encode = function(longUrl) {
    // URL is already in hash table
    let encodeVal = encodeMap.get(longUrl);
    if (encodeVal) {
        return encodeVal;
    }

    // URL is not in hash table
    let key = "http://tinyurl.com/" + encodeMap.size;
    encodeMap.set(longUrl, key);
    decodeMap.set(key, longUrl); 
    return key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if (decodeMap.has(shortUrl)) {
        return decodeMap.get(shortUrl);
    }
    return null;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
 // We really don't need hash function to solve this
/*
 var hash = function(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }

  return hash; 
}
*/