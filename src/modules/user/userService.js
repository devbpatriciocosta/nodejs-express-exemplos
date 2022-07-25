let users = [
  {
    email: 'bpatriciocosta@gmail.com'
  },
  {
    email: 'josehfortes@gmail.com'
  }
]

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail )

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("Existe O e-mail")
  } else {
    users.push(data)
  }
    
  return true
}