module.exports = (sequelize, Sequelize) => {
    const contactUs = sequelize.define("contact_us", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.TEXT
        }
    });

    return contactUs;
}