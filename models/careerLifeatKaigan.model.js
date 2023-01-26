module.exports = (sequelize, Sequelize) => {
    const careerLifeatKaigan = sequelize.define("career_life_at_kaigan", {
        image: {
            type: Sequelize.STRING
        }
    });

    return careerLifeatKaigan;
}