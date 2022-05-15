package demo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.PostModel;
import demo.model.UserModel;

@Controller
public class MainController {

	// FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;

	// CONSTRUCTORS\\
	@Autowired
	public MainController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
		super();
		this.userDao = userDao;
		this.postDao = postDao;
		this.commentDao = commentDao;
	}

	// ROUTING\\
	@GetMapping("/")
	public String routeLandingPage() {
		System.out.println("In the main router");
		return "landing.html";
	}

	@GetMapping("/login")
	public String routeLoginPage() {
		System.out.println("In the main/login router");
		return "html/login.html";
	}
	@GetMapping("/register")
	public String routeRegisterPage() {
		System.out.println("In the main/register router");
		return "html/register.html";
	}
	
	@GetMapping("/aboutus")
	public String routeAboutUsPage() {
		System.out.println("In the main/aboutus router");
		return "html/aboutus.html";
	}
	
	@GetMapping("/home")
	public String routeHomePage(HttpSession session) {
		System.out.println("In the main/home router");
		// MAKE SURE THE USER IS LOGGED IN
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser == null)
			return "landing.html";

		return "html/home.html";
	}
	
	@GetMapping("/profile")
	public String routeProfilePage(HttpSession session) {
		System.out.println("In the main/profile router");
		// MAKE SURE THE USER IS LOGGED IN
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser == null)
			return "landing.html";

		return "html/profile.html";
	}
	
	@GetMapping("/logout")
	public String logoutMethod(HttpSession session) {
		System.out.println("Logging out");
		session.invalidate();
		return "landing.html";
	}
	
	
	
	
	// DB ACCESSING\\
	@GetMapping("/homeall")
	public List<PostModel> homeGetAllPosts(HttpSession session) {
		// MAKE SURE THE USER IS LOGGED IN
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser == null)
			return null;

		List<PostModel> postArray = new ArrayList<>();
		postArray.addAll(postDao.findAll());

		return postArray;
	}

	// HELPER METHOD\\
}
