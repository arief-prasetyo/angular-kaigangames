module.exports = (sequelize, Sequelize) => {
    const gameList = sequelize.define("game_list", {
        game_image: {
            type: Sequelize.STRING
        },
        game_name: {
            type: Sequelize.STRING
        },
        game_description: {
            type: Sequelize.STRING
        },
        game_year: {
            type: Sequelize.INTEGER
        },
        game_platform: {
            type: Sequelize.STRING
        },
        game_rating: {
            type: Sequelize.STRING
        },
        esrb_rating: {
            type: Sequelize.STRING
        },
        pegi_rating: {
            type: Sequelize.STRING
        },
        pegi_cd: {
            type: Sequelize.STRING
        },
        media: {
            type: Sequelize.STRING
        },
        URI: {
            type: Sequelize.STRING
        }
    });

    return gameList;
}