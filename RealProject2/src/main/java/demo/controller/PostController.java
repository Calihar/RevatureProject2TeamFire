package demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;

@RestController
public class PostController {
	
	//FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;
	
	
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
