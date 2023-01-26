module.exports = (sequelize, Sequelize) => {
    const aboutSlide = sequelize.define("about_slider", {
        image: {
            type: Sequelize.STRING
        }
    });

    return aboutSlide;
}