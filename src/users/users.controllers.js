const DBusers = []
let id = 1

// Get all users from DB 
const allUsers = () => {
   return DBusers
}

// Get user by ID from DB 
const userById = (id) => {
   const found = DBusers.find(user => user.id == id)
   return found
}

// Creat one user on our DB
const newUser = (data) => {
   const newUserData = {
     id: id++,
     first_name: data.first_name,
     last_name: data.last_name,
     email: data.email,
     password: data.password,
     birthday: data.birthday
   }
   DBusers.push(newUserData)
   return newUserData
}

// Delete user 
const deleteUserById = (id) => {
   for(user of DBusers){
      if(user.id == id){
        const index = DBusers.indexOf(user)
        const deleated = DBusers.splice(index, 1)
        return `deleated user of id ${id}`
      }
   }
} 

//Update user 
const updateUserById = (id, data) => {
   for(user of DBusers){
      if(user.id == id){
         const index = DBusers.indexOf(user)
         const updatedData = {
            id: user.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            birthday: data.birthday
          }
       DBusers.splice(index, 1, updatedData)
       return updatedData
      }
   }
}

module.exports = {
    allUsers, 
    userById,
    newUser,
    deleteUserById,
    updateUserById
}