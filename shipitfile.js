module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '.shipit-temp',
            dirToCopy:'public',
            deployTo: '/var/www/ctcoppersmiths.com/html',
            repositoryUrl: 'https://github.com/qbunt/ctcoppersmiths.com.git',
            ignores: ['.git', 'node_modules'],
            keepReleases: 2,
            deleteOnRollback: false,
            key: '~/.ssh/id_rsa',
            shallowClone: true
        },
        production: {
            servers: 'qbunt@manhattan'
        }
    });
};