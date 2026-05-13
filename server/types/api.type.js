/**
 * @typedef {Object} ErrorResponse
 * @property {number} statusCode
 * @property {string} message
 */

/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {T} data
 * @property {ErrorResponse=} error
 */

export {}