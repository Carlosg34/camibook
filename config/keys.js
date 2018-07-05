if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

// module.exports = {
//     mongoURI: 'mongodb://carlos:carlos1@ds251210.mlab.com:51210/group-project',
//     secretOrKey: 'secret'
// };
