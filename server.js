// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

// var nodemailer = require('nodemailer');
// const creds = require('./config');

// var transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });


// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${content} `

//   var mail = {
//     from: name,
//     to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  //Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })

// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var cors = require('cors');
// const creds = require('./config');
// const app = express()

// app.get('/', function(req, res){
//   console.log("Something temp")
// });

// var transport = {
//     host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// app.post('/', (req, res) => {
//   console.log("singel dash")
// })

// app.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `
//   console.log(content)

//   var mail = {
//     from: name,
//     to: 'saman.alex.h@gmail.com',  // Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
    // if (err) {
    //   res.send({
    //     status: err
    //   })
    //   res.json({
    //     status: err
    //   })
    // } else {
    //   res.send({
    //     status: data
    //    })
    //   res.json({
    //    status: data
    //   })
    // }
//   })
// })

// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log('App listening on port ' + PORT)
// })



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const creds = require("./config.js");
const cors = require('cors');
app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: false
}));

app.post('/send', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: creds.USER,
        pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '', // sender address
        to: 'saman.alex.h@gmail.com', // list of receivers
        subject: req.body.name, // Subject line
        
        text: req.body.message + `\n \n Reply email ${req.body.email}` // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({
          status: error
        })
        res.json({
          status: error
        })
      } else {
        res.send({
          status: info
         })
        res.json({
         status: info
        })
      }
        console.log('Message sent: %s', info.messageId);
    });
});

const PORT = process.env.PORT || 3001;


app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// const express = require('express');
// const bodyParser = require("body-parser");
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();

// // View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// // Body parser
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render("/public/index.html");
// });

// app.post('/send', (req, res) => {
//   console.log(req.body);
// })

// app.listen(5000, () => console.log('Server is listening for messages'))
