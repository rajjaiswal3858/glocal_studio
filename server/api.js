import express from 'express';

const brevo = require('@getbrevo/brevo');

const apiInstance = new brevo.TransactionalEmailsApi();

// Secrets come from the environment (.env locally, Vercel project env vars in production)
apiInstance.setApiKey(
	brevo.TransactionalEmailsApiApiKeys.apiKey,
	process.env.BREVO_API_KEY || '',
);

const verifyEndpoint =
	'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const secret = process.env.TURNSTILE_SECRET_KEY || '';

const imagePath = 'https://www.glocalstudio.in/assets/emailer/';

const apiRouter = express.Router();

const getClientEmailContent = () => `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en-US">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Orbit&amp;display=swap" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		.row-4 .column-2 .block-4 .button:hover {
			background-color: #2dbd75 !important;
			border-bottom: 0 solid #2bb06e !important;
			border-left: 0 solid #2bb06e !important;
			border-right: 0px solid #2bb06e !important;
			border-top: 0 solid #2bb06e !important;
			color: #000000 !important;
		}

		@media (max-width:720px) {

			.desktop_hide table.icons-inner,
			.row-5 .column-1 .block-2.social_block .alignment table,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block div.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-1 .column-1 .block-4.heading_block h1 {
				text-align: left !important;
			}

			.row-1 .column-1 .block-4.heading_block h1 {
				font-size: 89px !important;
			}

			.row-3 .column-1 .block-1.spacer_block {
				height: 60px !important;
			}

			.row-1 .column-1 .block-2.image_block .alignment div {
				margin: 0 auto 0 0 !important;
			}

			.row-3 .column-2 .block-2.spacer_block {
				height: 40px !important;
			}

			.row-3 .column-2 .block-3.heading_block h1 {
				text-align: center !important;
				font-size: 50px !important;
			}

			.row-3 .column-2 .block-3.heading_block td.pad {
				padding: 0 0 30px !important;
			}

			.row-5 .column-1 .block-2.social_block .alignment,
			.row-5 .column-1 .block-4.heading_block h3 {
				text-align: center !important;
			}

			.row-4 .column-2 .block-1.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 22px !important;
			}

			.row-4 .column-2 .block-1.paragraph_block td.pad {
				padding: 0 0 15px !important;
			}

			.row-4 .column-3 .block-1.spacer_block {
				height: 20px !important;
			}

			.row-5 .column-1 .block-2.social_block td.pad,
			.row-5 .column-1 .block-4.heading_block td.pad {
				padding: 10px 0 5px !important;
			}

			.row-5 .column-1 .block-3.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 12px !important;
			}

			.row-5 .column-1 .block-3.paragraph_block td.pad {
				padding: 10px 0 !important;
			}

			.row-4 .column-2 .block-2.heading_block h2 {
				font-size: 20px !important;
			}

			.row-4 .column-2 .block-4.button_block span {
				font-size: 14px !important;
				line-height: 28px !important;
			}

			.row-2 .row-content,
			.row-3 .row-content {
				padding: 0 20px !important;
			}

			.row-3 .column-2 {
				padding: 0 !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #010c0d; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #010c0d; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1 mobile_hide" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 210px;"><img src="${imagePath}1_logo.svg" style="display: block; height: auto; border: 0; width: 100%;" width="210" alt="Your Logo" title="Your Logo" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
													<table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;text-align:center;width:100%;">
																<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 100px; font-weight: 900; letter-spacing: normal; line-height: 1; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 100px;">WE GOT YOUR QUERY!</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('${imagePath}2_Pattern.png'); background-position: top center; background-repeat: no-repeat; background-size: auto; background-video: url('');">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; border-radius: 0; color: #000000; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle;">
													<table class="image_block block-1 mobile_hide" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:25px;padding-right:25px;width:100%;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 650px;"><img src="${imagePath}3_astro_1.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" alt="a person wearing headphones" title="a person wearing headphones" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table><!--[if !mso]><!-->
					<table class="row row-3 desktop_hide" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; background-size: auto; border-radius: 0; color: #000000; padding-left: 10px; padding-right: 10px; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
												</td>
												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 40px; padding-right: 40px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 165px;"><img src="${imagePath}1_logo.svg" style="display: block; height: auto; border: 0; width: 100%;" width="165" alt="Pattern" title="Pattern" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-2" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
													<table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 100px; font-weight: 700; letter-spacing: -1px; line-height: 1; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 100px;">WE GOT YOUR QUERY!</h1>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1 desktop_hide" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 96.667px;"><img src="${imagePath}3_astro_1.png" style="display: block; height: auto; border: 0; width: 100%;" width="96.667" alt="a person wearing headphones" title="a person wearing headphones" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table><!--<![endif]-->
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url(''); background-position: top center; background-repeat: no-repeat; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; border-radius: 0; color: #000000; padding-left: 20px; padding-right: 20px; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1 mobile_hide" style="height:110px;line-height:110px;font-size:1px;">&#8202;</div>
												</td>
												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="paragraph_block block-1 desktop_hide" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#2bb06e;direction:ltr;font-family:'Orbit','Helvetica';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0;"><span style="word-break: break-word; color: #fffefe; background-color: #000101;">↓</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 30px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Your message is now with our creative team, and we’ll connect with you soon.&nbsp;</span></h2>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
													<table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;">
																<div class="alignment" align="center"><a href="http://www.glocalstudio.in" target="_blank" style="color:#000000;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://www.glocalstudio.in"  style="height:42px;width:201px;v-text-anchor:middle;" arcsize="72%" fillcolor="#2bb06e">
<v:stroke dashstyle="Solid" weight="0px" color="#2bb06e"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#000000;font-family:Tahoma, Verdana, sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #2bb06e; mso-shading: transparent; border-bottom: 0px solid #2bb06e; border-left: 0px solid #2bb06e; border-radius: 30px; border-right: 0px solid #2bb06e; border-top: 0px solid #2bb06e; color: #000000; display: inline-block; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 16px; font-weight: 700; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 20px; padding-right: 20px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">&nbsp; &nbsp; EXPLORE MORE ➔&nbsp; &nbsp;</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:110px;line-height:110px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('${imagePath}4_Pattern_footer.png'); background-repeat: no-repeat; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; border-radius: 0; color: #000000; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
													<table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-top:10px;text-align:center;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/company/glocal-studio/posts/?feedView=all" target="_blank"><img src="${imagePath}7_linkedin2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/glocalstudio_/" target="_blank"><img src="${imagePath}8_instagram2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:10px;">
																<div style="color:#ffffff;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0;"><strong>Head Office - India</strong><br>B 73, Block B, Sector 57, Noida, <br>Uttar Pradesh 201301<br><br><a href="tel:+1732-344-4260" target="_blank" title="Hello!" style="text-decoration: underline; color: #7747FF;" rel="noopener">+1732-344-4260</a> &nbsp;| &nbsp;<a href="mailto:info@glocalstudio.in" target="_blank" title="Hi" style="text-decoration: underline; color: #7747FF;" rel="noopener">info@glocalstudio.in</a><br><a rel="noopener" style="text-decoration: underline; color: #7747FF;"></a></p>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-5" style="height:60px;line-height:60px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`;

const handleSendEmail = (formData, res) => {
	const {
		name,
		email,
		phone,
		service_info: serviceInfo,
		page_url: pageUrl,
	} = formData;

	const sendAdminEmail = new brevo.SendSmtpEmail();

	sendAdminEmail.subject = 'New Contact Query Received!';
	sendAdminEmail.htmlContent = `
		<html>
		<body>
			Dear Admin,<br /><br />
			At the outset Glocal Studio has received a new contact enquiry. Please find the details below:<br />
			Name: ${name}<br />
			Email: ${email}<br />
			Phone: ${phone}<br />
			Requirements: ${serviceInfo}<br />
			Page: ${pageUrl}<br /><br />
			Request you to please get in touch as soon as possible.<br /><br />
			Thank You.
		</body>
		</html>`;
	sendAdminEmail.sender = {
		email: 'info@glocalstudio.in',
		name: 'Glocal Studio',
	};

	sendAdminEmail.to = [
		{
			email: 'info@glocalstudio.in',
			name: 'Glocal Studio',
		},
		{
			email: 'rohit@headfield.com',
			name: 'Rohit Chaudhary',
		},
		{
			email: 'sk@head-field.com',
			name: 'Shweta Khandelwal',
		},
	];

	sendAdminEmail.replyTo = {
		email: email,
		name: `${name}`,
	};

	const sendClientEmail = new brevo.SendSmtpEmail();

	sendClientEmail.subject =
		"Thanks for Reaching Out - We'll Get Back to You Soon!";
	sendClientEmail.htmlContent = getClientEmailContent(name);
	sendClientEmail.sender = {
		email: 'info@glocalstudio.in',
		name: 'Glocal Studio',
	};
	sendClientEmail.to = [
		{
			email: 'info@glocalstudio.in',
			name: 'Glocal Studio',
		},
		{
			email: 'rohit@headfield.com',
			name: 'Rohit Chaudhary',
		},
		{
			email: 'sk@head-field.com',
			name: 'Shweta Khandelwal',
		},
	];
	sendClientEmail.replyTo = {
		email: 'info@glocalstudio.in',
		name: 'Glocal Studio',
	};

	Promise.all([
		apiInstance.sendTransacEmail(sendAdminEmail),
		apiInstance.sendTransacEmail(sendClientEmail),
	])
		.then(() => {
			res.send({
				success: true,
				message: "Thanks for Reaching Out - We'll Get Back to You Soon!",
			});
		})
		.catch(() => {
			res.status(500);
			res.send({
				success: false,
				message: 'Sorry! Something went wrong.',
			});
		});
};

apiRouter.post('/submit-form', (req, res) => {
	const { captchaToken } = req.body;

	fetch(verifyEndpoint, {
		method: 'POST',
		body: JSON.stringify({
			secret,
			response: captchaToken,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then(() => {
			handleSendEmail(req.body, res);
		})
		.catch(() => {
			res.status(500);
			res.send({
				success: false,
				message: 'Recaptcha verification failed. Please try again.',
			});
		});
});

export default apiRouter;
