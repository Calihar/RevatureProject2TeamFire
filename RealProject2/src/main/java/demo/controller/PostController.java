package demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.util.StorageService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	//FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;
	
	
	@Autowired
	private StorageService storageServ;
	
	//CONSTRUCTORS\\
	@Autowired
	public PostController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
		super();
		this.userDao = userDao;
		this.postDao = postDao;
		this.commentDao = commentDao;
	}
	
	//ENDPOINTS\\
	
	
	

}
