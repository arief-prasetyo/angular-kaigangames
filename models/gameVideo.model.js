module.exports = (sequelize, Sequelize) => {
    const gameVideo = sequelize.define("game_video", {
        game_id: {
            type: Sequelize.INTEGER
        },
        game_name: {
            type: Sequelize.STRING
        },
        game_uri: {
            type: Sequelize.TEXT
        }
    });

    return gameVideo;
}