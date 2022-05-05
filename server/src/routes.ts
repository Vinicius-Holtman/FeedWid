import { Router } from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const router =  Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0187246a6e2954",
    pass: "d39cf6cd87df75"
  }
});

router.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = 

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Vinicius <viniholtman28@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback })
})


export { router }