module.exports = (sequelize, Sequelize) => {
    const aboutTeamImage = sequelize.define("about_team_image", {
        image: {
            type: Sequelize.STRING
        }
    });

    return aboutTeamImage;
}