package demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.PostModel;
import demo.util.StorageService;

@Controller
public class MainController {
	
		//FIELDS\\
		private UserDao userDao;
		private PostDao postDao;
		private CommentDao commentDao;
		
		//CONSTRUCTORS\\
		@Autowired
		public MainController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
			super();
			this.userDao = userDao;
			this.postDao = postDao;
			this.commentDao = commentDao;
		}
	
	@GetMapping("/")
	public String routeLandingPage() {
		System.out.println("In the main controller");
		return "landing.html";
	}
	
	//ROUTING\\
	@GetMapping("/home")
	public String routeHomePage() {
		//MAKE SURE THE USER IS LOGGED IN
		return "html/home.html";
	}
	
	
	//DB ACCESSING\\
	@GetMapping("/homeall")
	public List<PostModel> homeGetAllPosts() {
		List<PostModel> postArray = new ArrayList<>();
		postArray.addAll(postDao.findAll());
		
		return postArray;
	}
	
	
	//HELPER METHOD\\
}
