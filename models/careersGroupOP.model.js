module.exports = (sequelize, Sequelize) => {
    const careerGroupOP = sequelize.define("career_group_open_position", {
        group_position: {
            type: Sequelize.STRING
        }
    });

    return careerGroupOP;
}