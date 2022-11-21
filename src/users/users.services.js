const controllers = require('./users.controllers')

const getAllUsers = (req, res) => {
   const users = controllers.allUsers()
   res.status(200).json(users)
}

const getUserByID = (req, res) => {
  const id = req.params.id
  const userFound = controllers.userById(id)

  if(userFound){
    res.status(200).json(userFound)
  }else{
    res.status(404).json({message: 'User not found'})
  }
}

const createNewUser = (req, res) => {
  const {first_name, last_name, email, password, birthday} = req.body

  if(first_name && last_name && email && password && birthday ){
     const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      birthday: birthday
     }
     const newUserData = controllers.newUser(data)
     res.status(201).json(newUserData)
  }else{
    res.status(400).json(
      {message: "invalid data", 
       filds:{
        first_name: '*',
        last_name: '*',
        email: '*', 
        password: '*',
        birthday: '*'
       }
      })
  }
}

const deleteByID = (req, res) => {
  const id = req.params.id
  const deleatedUser = controllers.deleteUserById(id)

  if(deleatedUser){
    res.status(200).json(deleatedUser)
  }else{
    res.status(404).json({message: `ID ${id} not found`})
  }
}

const updateUser = (req, res) => {
  const id = req.params.id
  const {first_name, last_name, email, password, birthday} = req.body

  if(first_name && last_name && email && password && birthday ){
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      birthday: birthday
     }
     const updatedUser = controllers.updateUserById(id, data)
     res.status(201).json(updatedUser)
    }else{
     res.status(400).json(
      {message: "invalid data", 
       filds:{
          first_name: '*',
          last_name: '*',
          email: '*', 
          password: '*',
          birthday: '*'
         }
      })
  }
}

module.exports = {
 getAllUsers, 
 getUserByID, 
 createNewUser,
 deleteByID,
 updateUser
}