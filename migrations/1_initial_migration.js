const Messages = artifacts.require("Messages");

module.exports = function (deployer) {
    deployer.deploy(Messages);
};
