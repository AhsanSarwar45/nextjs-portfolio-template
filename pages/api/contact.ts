import { NextApiRequest, NextApiResponse } from "next";

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
    const user = process.env.email_user;
    const password = process.env.email_pass;
    const nodeoutlook = require("nodejs-nodemailer-outlook");
    nodeoutlook.sendEmail({
        auth: {
            user: { user },
            pass: { password },
        },
        from: "arcane_art_site@outlook.com",
        to: "azeemsarwarrockzs@gmail.com",
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
        <div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>
        `,

        onError: (error: any) => {
            res.status(400).send({});
            console.log(error);
        },
        onSuccess: (info: any) => {
            res.status(200).send({});
        },
    });
};

export default sendEmail;
