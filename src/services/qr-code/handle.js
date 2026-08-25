import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.error(chalk.red.italic("Erro na aplicação"));
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QRCode gerado com sucesso!"));
    console.log(qrcode);
  });
}

export default handle;
