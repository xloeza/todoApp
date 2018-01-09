module.exports = function (grunt) {
    var config = {
        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname: 'localhost',
                    base: 'public'
                }
            }
        }
    };

    grunt.config.merge(config);
};