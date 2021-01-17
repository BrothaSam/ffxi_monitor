const { exec } = require("child_process");
const fs = require("fs");

exec(
  fs.readFile("./scripts/stop-topaz_game.ps1", "utf8", (err, data) => {
    if (!err) {
      return data;
    }
  }),
  { shell: "powershell.exe" },
  (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
  }
);
