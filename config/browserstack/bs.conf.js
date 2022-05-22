let bsConf = {
  user: "${{ secrets.BROWSERSTACK_USER }}",
  key: "${{ secrets.BROWSERSTACK_KEY }}",
  services: ["browserstack"],
};

module.exports = { bsConf };
