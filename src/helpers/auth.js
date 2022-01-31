const TTL = 10

export const authorize = (token) => {
    const now = new Date()

    localStorage.setItem('Token', token)
    localStorage.setItem('TokenExpires', new Date(now.getTime() + TTL * 60 * 1000).toISOString())
}

export const checkValidity = () => {
    const expiredDateString = localStorage.getItem('TokenExpires')
    const expiredDate =  new Date(expiredDateString)
    const now =  new Date()

    return expiredDate > now
}

export const logout = () => {
    localStorage.removeItem('Token')
    localStorage.removeItem('TokenExpires')
}