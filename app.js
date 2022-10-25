const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer");


const app = express()


const PORT = process.env.PORT || 8000



app.use(cors())



app.get("/send-email", (req, res) => {
    var body = {
        envelope: {
            from: 'tongisttonji@gmail.com',
            to: ['mikytonji13362@gmail.com']
        },
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    sendEmail(body).then(resp => {
        console.log(resp)
        res.json({ success: true, response: resp })
    }).catch(error => {
        console.log(error)
        res.json({ success: false, error })
    })
})


const sendEmail = async (body) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mikytonji13362@gmail.com',
            pass: 'cgzesghqymqypyad'
        }
    });

    const result = await transporter.sendMail(body);
    return result;
}



app.listen(PORT, () => {
    console.log(`Backend listening at port ${PORT}`)
})


