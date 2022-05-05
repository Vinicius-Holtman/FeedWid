import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0187246a6e2954",
    pass: "d39cf6cd87df75"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Vinicius <viniholtman28@gmail.com>",
      subject,
      html: body
    })
  }
}