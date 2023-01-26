module.exports = (sequelize, Sequelize) => {
    const jobApplicant = sequelize.define("job_applicant", {
        job_title: {
            type: Sequelize.STRING
        },
        job_location: {
            type: Sequelize.STRING
        },
        resume_file: {
            type: Sequelize.STRING
        },
        cover_letter: {
            type: Sequelize.TEXT
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        street_address: {
            type: Sequelize.TEXT
        },
        city: {
            type: Sequelize.STRING
        },
        state_or_province: {
            type: Sequelize.STRING
        },
        zip_code: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        linkedIn_profile: {
            type: Sequelize.TEXT
        },
        hear_us_from: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        race: {
            type: Sequelize.STRING
        }
    });

    return jobApplicant;
}