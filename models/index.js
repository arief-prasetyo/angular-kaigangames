const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.headerSlide = require("./headerSlider.model.js")(sequelize, Sequelize);
db.about = require("./about.model.js")(sequelize, Sequelize);
db.aboutSlide = require("./aboutSlider.model.js")(sequelize, Sequelize);
db.aboutTeamImage = require("./aboutTeamImage.model.js")(sequelize, Sequelize);
db.careerBenefitPerks = require("./careerBenefitPerks.model.js")(sequelize, Sequelize);
db.careerFeaturedJobs = require("./careerFeaturedJob.model.js")(sequelize, Sequelize);
db.careerGroupOP = require("./careersGroupOP.model.js")(sequelize, Sequelize);
db.careerOpenPosition = require("./careerOpenPosition.model.js")(sequelize, Sequelize);
db.careerLifeatKaigan = require("./careerLifeatKaigan.model.js")(sequelize, Sequelize);
db.jobApplicant = require("./jobApplicant.js")(sequelize, Sequelize);
db.gameList = require("./gameList.model.js")(sequelize, Sequelize);
db.gameVideo = require("./gameVideo.model.js")(sequelize, Sequelize);
db.gameFAQ = require("./gameFAQ.model.js")(sequelize, Sequelize);
db.contactUs = require("./contactUs.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;