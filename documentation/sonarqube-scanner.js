const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "sqp_cecdd493a5be41f0d658bafe1e060752f48b2464",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
