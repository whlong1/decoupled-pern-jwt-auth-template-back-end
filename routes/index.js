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
  // const foundUser = await User.findByPk(1, {
  //   include: [{
  //     as: "profile",
  //     model: Profile,
  //   }]
  // })

  // console.log('User Profile Data:', foundUser.profile)

  //? =====================
  // //! Delete User & Cascade Check:
  // Associated Profile row is removed in this scenario
  // If cascade is not specified, error will be thrown when deleting parent
  // const removedUserId = await User.destroy({
  //   where: { id: 1 }
  // })

  // console.log(removedUserId)

  //? =====================
  // //! Delete Profile & NonCascade Check:
  // Associated User row is NOT removed in this scenario
  // const removedProfileId = await Profile.destroy({
  //   where: { id: 1 }
  // })

  // console.log(removedProfileId)

  res.send('OK')
})

module.exports = router
