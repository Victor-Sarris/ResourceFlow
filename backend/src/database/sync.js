const Connection = require("../database/database.js");
require("../models/user.models.js");

Connection.sync();
