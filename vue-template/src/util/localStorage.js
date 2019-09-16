export function setLocalStorage(name, data) {
    localStorage.setItem(name, data)
}
export function setSessionStorage(name, data) {
    sessionStorage.setItem(name, data)
}


export function getLocalStorage(name) {
    return localStorage.getItem(name)
}
export function getSessionStorage(name) {
    return sessionStorage.getItem(name)
}

export function clearLocalStorage() {
    return localStorage.clear()
}
export function clearSessionStorage() {
    return sessionStorage.clear()
}

export function removeSessionStorage(name) {
    return sessionStorage.removeItem(name)
}