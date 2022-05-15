package demo.controller;

import java.sql.Timestamp;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.UserModel;
import demo.util.StorageService;

@RestController
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
	
	
	//DB ACCESSING\\
	@PostMapping("/l-authentication")
	public String loginToHomePage(HttpSession session, @RequestBody UserModel reqUser) {
		System.out.println("In the user/login controller");
		
		UserModel dbUser = loginAuthentication(reqUser);
		if(dbUser == null) {
			return "html/login.html";
		}
		session.setAttribute("loggedUser", dbUser);
		
		return "html/home.html";
	}
	
	@PostMapping("/r-authentication")
	public String registerToHomePage(HttpSession session, @RequestBody UserModel reqUser ) {
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
	
	@GetMapping("/profile/user")
	public UserModel currentUserProfile(HttpSession session) {
		UserModel tempUser =  (UserModel)session.getAttribute("loggedUser");
		
		return tempUser;
	}
	
	@GetMapping("/profile/{username}")
	public UserModel pathUserProfile(@PathVariable("username") String username) {
		UserModel tempUser = userDao.findByUsername(username);
		
		
		return tempUser;
	}
	
	@PostMapping("/profile/update")
	public UserModel updateUserProfile(HttpSession session, @RequestBody UserModel reqUser) {
		UserModel currentUser = (UserModel)session.getAttribute("loggedUser");
		
		return null;
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
