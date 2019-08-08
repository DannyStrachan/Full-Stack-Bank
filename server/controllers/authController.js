const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    // This will give us access to the database ^
    const { email, password, username } = req.body;
    // first we need to see if a user has already been registered

    const user = await db.find_email([email]);
    // When we run this ^ it's going to come back with an array of user objects
    if (user.length > 0) {
      return res.status(400).send({ message: "Email in use." });
    }
    //  Now we need to hash and salt the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.insert_user_info({ username, email }); //----> this is an [{user_id: 1, ....}]
    // ^ now we have inserted this registering user into the user_info table
    db.insert_hash({ hash, user_id: newUser[0].user_id })
      .then(() => {
        db.create_account([newUser[0].user_id])
        req.session.user = newUser[0] // newUser: [{}], newUser[0]: {}
        res
          .status(200)
          .send({
            message: 'Logged in',
            user: req.session.user,
            loggedIn: true
          })
      })
      .catch(err => {
        res.status(500).send({message: 'Failed to register'})
        // can't send a message with 400 errors so we do an ok status
      })
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const user = await db.find_email_hash([email])
    if (user.length === 0) {
      return res.status(400).send({message: 'Email not found'})
    }
    const result = bcrypt.compareSync(password, user[0].hash)
    if (result) {
      delete user[0].hash
      req.session.user = user[0]
      return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}

// INITIALLY DO THIS
// module.exports = {
//     register: (req, res) => {
//         res.status(200).send('It Worked!')
//     }
// }
