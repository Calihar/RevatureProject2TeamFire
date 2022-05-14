package demo.controller;

import java.sql.Timestamp;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.UserModel;
import demo.util.StorageService;

@Controller
public class UserController {
	
	//FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;
	
	@Autowired
	private StorageService storageServ;
	
	
	//CONSTRUCTORS\\
	@Autowired
	public UserController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
		super();
		this.userDao = userDao;
		this.postDao = postDao;
		this.commentDao = commentDao;
	}
	
	//ENDPOINTS\\
	
	
	//ROUTING\\
	@GetMapping("/login")
	public String routeLoginPage() {
		System.out.println("In the user/login controller");
		return "html/login.html";
	}
	@GetMapping("/register")
	public String routeRegisterPage() {
		System.out.println("In the user/login controller");
		return "html/register.html";
	}
	
	
	
	//DB ACCESSING\\
	@PostMapping("/l-authentication")
	public String routeLoginToHomePage(HttpSession session, @RequestBody UserModel reqUser) {
		System.out.println("In the user/login controller");
		
		UserModel dbUser = loginAuthentication(reqUser);
		if(dbUser == null) {
			return "html/login.html";
		}
		session.setAttribute("loggedUser", dbUser);
		
		return "html/home.html";
	}
	
	@PostMapping("/r-authentication")
	public String routeRegisterToHomePage(HttpSession session, @RequestBody UserModel reqUser ) {
		System.out.println("In the user/register controller");
		
		UserModel dbCheck = loginAuthentication(reqUser);
		
		if(dbCheck != null) {
			return "html/login.html";
		}
		reqUser.setCreationDate(new Timestamp(System.currentTimeMillis()));
		UserModel newUser = userDao.save(reqUser);
		
		session.setAttribute("loggedUser", newUser);
		
		return "html/home.html";
	}
	
	
	
	
	
	//HELPER METHODS\\
	public UserModel loginAuthentication(UserModel reqUser){
		UserModel dbUser = userDao.findByUsername(reqUser.getUsername());
		if(dbUser != null) {
			/*
			 * PASSWORD HASHING AND DEHASHING METHOD CALS WILL GO HERE!!
			 */
			if(dbUser.getPassword() == reqUser.getPassword()) {
				return dbUser;
			}
		}
		return null;
	}
	
	
	
	
	
	
	
	
	
	
	
}
