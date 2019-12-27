'use strict'

class ForgotPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      redirect_url: 'required|url'
    }
  }
}

module.exports = ForgotPassword
