const { Router } = require('express')
const { User, Profile } = require('../models')

const router = Router()


router.get('/', async function (req, res) {
  //? =====================
  //! Create User:
  // const userData = {
  //   name: "Ben Manley",
  //   email: "manliestben@gmail.com",
  //   password: "secretsecret"
  // }

  // const newUser = await User.create(userData)
  // console.log('New User Data:',newUser)

  //? =====================
  //! Create Profile:
  // const user = await User.findByPk(1)
  // console.log('User Data:', user)

  // const profileData = {
  //   name: user.name,
  //   photo: "",
  //   user_id: user.id,
  // }

  // const profile = await Profile.create(profileData)
  // console.log('Profile Data:',profile)

  //? =====================
  //! Association Check:
  // const user = await User.findByPk(1, {
  //   include: [{
  //     as: "profile",
  //     model: Profile,
  //   }]
  // })

  // console.log('User Profile Data:', user.profile)
  // res.json(user)
})

module.exports = router
