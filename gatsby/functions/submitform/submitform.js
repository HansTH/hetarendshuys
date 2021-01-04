const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL_USER, // generated ethereal user
		pass: process.env.MAIL_PASS, // generated ethereal password
	},
});

exports.handler = async (event, context) => {
	const body = JSON.parse(event.body);
	// validate the data coming in is correct
	const requiredFields = ['naam', 'email', 'bericht'];

	if (body.arendshuys) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: 'Boop Biep Baap good bye!' }),
		};
	}

	for (const field of requiredFields) {
		if (!body[field]) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					message: `Oops! U heeft de ${field} veld niet ingevuld!`,
				}),
			};
		}
	}

	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: `${body.email}`, // sender address
		to: 'info@xyztest.nl', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world?', // plain text body
		html: `<b>${body.message}</b>`, // html body
	});

	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Success!' }),
	};
};
