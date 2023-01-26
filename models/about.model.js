module.exports = (sequelize, Sequelize) => {
    const about = sequelize.define("about", {
        content: {
            type: Sequelize.TEXT
        }
    });

    return about;
}