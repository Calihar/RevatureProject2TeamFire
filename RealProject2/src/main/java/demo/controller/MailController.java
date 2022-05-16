package demo.controller;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.model.UserModel;

@RestController
public class MailController {

	String messageContent = "Someone logged into your account has requested a password reset. If you did not do this, then please call Trevin Chester at Revature. "
			+ "<br><br>Otherwise, please click on the link below to go to our reset page"
			+ "<br><br><a href='http://localhost:9001/finalizepasswordreset'>Password Reset</a>"
			+ "<br><br>Thanks,<br>Hot Takes Security Team";

	@GetMapping("/sendemail")
	public String sendEmail(HttpSession session) throws AddressException, MessagingException, IOException {
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser != null) {
			sendMail(currentUser.getUserEmail());
			return "Email sent successfully";
		}
		return "Email did not send";
	}

	private void sendMail(String email) throws AddressException, MessagingException, IOException {
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("hottakesreview@gmail.com", System.getenv("USER_SALT"));
			}
		});

		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("hottakesreview@gmail.com", false));
		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
		msg.setSubject("Hot Takes Review Password Reset");
		msg.setContent(messageContent, "text/html");
		msg.setSentDate(new Date());

		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent("Hot Takes Review Password Reset", "text/html");

		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);
//		MimeBodyPart attachPart = new MimeBodyPart();
//
//		attachPart.attachFile("favicon.ico");
//		multipart.addBodyPart(attachPart);
//		msg.setContent(multipart);
		Transport.send(msg);
	}

}
