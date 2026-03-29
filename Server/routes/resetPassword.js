const { resetPasswordToken, changePassword } = require("../controller/forgotPasswordController")
const { route } = require("./search")

const router = require("express").Router()

router.post('/reset-password-token',resetPasswordToken)
router.post('/reset-password',changePassword)

module.exports = router;