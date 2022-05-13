package demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.util.StorageService;

@RestController
@RequestMapping("/user")
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
	
	@PostMapping("/loginauthentication")
	public String routeLoginToHomePage() {
		System.out.println("In the user/login controller");
		
		//BUSINESS LOGIC
		
		return "html/home.html";
	}
	
	@PostMapping("/registerauthentication")
	public String routeRegisterToHomePage() {
		System.out.println("In the user/login controller");
		
		//BUSINESS LOGIC
		
		return "html/home.html";
	}
}
