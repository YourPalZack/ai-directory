/**
 * @typedef {Object} BusinessHours
 * @property {string} day
 * @property {string} open
 * @property {string} close
 * @property {boolean} isClosed
 */

/**
 * @typedef {Object} Review
 * @property {string} id
 * @property {string} author
 * @property {number} rating
 * @property {string} comment
 * @property {string} date
 */

/**
 * @typedef {Object} Business
 * @property {string} id
 * @property {string} name
 * @property {string} address
 * @property {string} phone
 * @property {string} website
 * @property {string[]} images
 * @property {BusinessHours[]} hours
 * @property {Review[]} reviews
 * @property {number} averageRating
 * @property {Coordinates} coordinates
 */

/**
 * @typedef {Object} Coordinates
 * @property {number} lat
 * @property {number} lng
 */