// passwordUtils.js

export function isStrongPassword(password) {
  // 至少包含一个小写字母、一个大写字母和一个数字
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  return regex.test(password);
}

export function hasSpecialCharacters(password) {
  // 包含除小写字母、大写字母和数字之外的字符
  const regexSpecialChars = /[^a-zA-Z\d]/;

  return regexSpecialChars.test(password);
}