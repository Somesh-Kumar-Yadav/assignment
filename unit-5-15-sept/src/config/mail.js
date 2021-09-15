const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: "4d3d3f82db78a8", // generated ethereal user
		pass: "42472e6464c375", // generated ethereal password
	},
});

module.exports = transporter;
