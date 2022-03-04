const TokenKey = 'token'
const Name = 'userName'
const Expire = 'expire'
const Nav = 'navList'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getExpire() {
  return localStorage.getItem(Expire)
}
export function setExpire(time) {
  return localStorage.setItem(Expire, time)
}

export function removeExpire() {
  return localStorage.removeItem(Expire)
}

export function getName() {
  return localStorage.getItem(Name)
}
export function setName(name) {
  return localStorage.setItem(Name, name)
}

export function removeName() {
  return localStorage.removeItem(Name)
}

export function getNav() {
  return localStorage.getItem(Nav)
}
export function setNav(list) {
  return localStorage.setItem(Nav, JSON.stringify(list))
}
export function removeNav() {
  return localStorage.removeItem(Nav)
}

