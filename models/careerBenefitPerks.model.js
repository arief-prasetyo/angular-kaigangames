module.exports = (sequelize, Sequelize) => {
    const careerBenefitPerks = sequelize.define("career_benefit_perks", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        }
    });

    return careerBenefitPerks;
}