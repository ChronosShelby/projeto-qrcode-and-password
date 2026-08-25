import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha o tipo de QRCode 1)Imagem ou 2)Terminal",
    ),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha 1 ou 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
