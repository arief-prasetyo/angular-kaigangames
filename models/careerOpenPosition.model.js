module.exports = (sequelize, Sequelize) => {
    const careerOpenPosition = sequelize.define("career_open_position", {
        job_title: {
            type: Sequelize.STRING
        },
        job_location: {
            type: Sequelize.STRING
        },
        group_position: {
            type: Sequelize.STRING
        },
        image_file: {
            type: Sequelize.STRING
        },
        about_kaigangames: {
            type: Sequelize.TEXT
        },
        job_role: {
            type: Sequelize.STRING
        },
        job_responsibilities: {
            type: Sequelize.TEXT
        },
        job_requirement: {
            type: Sequelize.TEXT
        },
        job_requirement_bonus_point: {
            type: Sequelize.TEXT
        },
        job_benefits_and_perks: {
            type: Sequelize.TEXT
        },
        current_project: {
            type: Sequelize.TEXT
        },
        footer: {
            type: Sequelize.TEXT
        }
    });

    return careerOpenPosition;
}