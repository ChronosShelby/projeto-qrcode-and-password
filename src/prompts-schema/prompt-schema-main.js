import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramente 1)QRCODE ou 2)PASSWORD",
    ),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha 1 ou 2"),
    required: true,
  },
];

export default promptSchemaMain;
