/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|http?:|mailto:|tel:)/.test(path)
}

/**
 * @param {str} arg
 * @returns {Boolean}
 */
export function isValidPhone(str) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
  return reg.test(str)
}

/**
 * @param {str} arg
 * @returns {Boolean}
 */
export function isValidIdCard(str) {
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return reg.test(str)
}
/**
 * @param {str} arg
 * @returns {Boolean}
 */
export function isValidCode(str) {
  const reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
  return reg.test(str)
}
/**
 * @param {str} arg
 * @returns {Boolean}
 */
export function isValidPassword(str) {
  const reg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}/
  return reg.test(str)
}
/**
 * @param {str} arg
 * @returns {String}
 */
export function filterContent(str) {
  return str.replace(/<[^>]+>/g, '')
}
