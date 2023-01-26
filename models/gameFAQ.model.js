module.exports = (sequelize, Sequelize) => {
    const gameFAQ = sequelize.define("game_faq", {
        game_id: {
            type: Sequelize.INTEGER
        },
        game_name: {
            type: Sequelize.STRING
        },
        faq_title: {
            type: Sequelize.TEXT
        },
        faq_content: {
            type: Sequelize.TEXT
        },
        faq_data_target: {
            type: Sequelize.TEXT
        }
    });

    return gameFAQ;
}