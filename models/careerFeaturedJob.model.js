module.exports = (sequelize, Sequelize) => {
    const careerFeaturedJobs = sequelize.define("career_featured_job", {
        job_title: {
            type: Sequelize.STRING
        },
        job_location: {
            type: Sequelize.STRING
        },
        job_description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        }
    });

    return careerFeaturedJobs;
}