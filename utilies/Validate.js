//email
export const isValiEmail = (stringemail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringemail)

//pass
export const isValiPassword = (stringPassword) => stringPassword.length >= 3

