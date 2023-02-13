const sequelize = require('../config/connection');
//const { User } = require('../models/User');
require('../models');
//const userData = require('./user.json');

const createTables = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

createTables();
