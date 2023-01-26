module.exports = (sequelize, Sequelize) => {
    const headerSlide = sequelize.define("header_slider", {
        image: {
            type: Sequelize.STRING
        }
    });

    return headerSlide;
}