package demo.controller;

import java.io.IOException;
import java.sql.Timestamp;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.PostModel;
import demo.model.UserModel;
import demo.util.StorageService;

@RestController
@RequestMapping("/post")
public class PostController {

	// FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;

	@Autowired
	private StorageService storageServ;

	// CONSTRUCTORS\\
	@Autowired
	public PostController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
		super();
		this.userDao = userDao;
		this.postDao = postDao;
		this.commentDao = commentDao;
	}

	// ENDPOINTS\\

	// DB ACCESS\\
	@PostMapping("/post")
	public String postToDataBase(PostModel postModel, HttpSession session) {
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser != null) {
			postModel.setSubmitTime(new Timestamp(System.currentTimeMillis()));
			postDao.save(postModel);
		}

		return null;
	}

	/**
	 * 
	 * @param file
	 * @return returns a URL that will last for 24 hours.
	 * @throws IOException
	 */
	@PostMapping("/post/photo")
	public String postPhotoToDataBase(@RequestParam(value = "file") MultipartFile file, PostModel postModel)
			throws IOException {
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser != null) {
			String newFileName = storageServ.uploadAWSFile(file);
			String newFileURL = storageServ.presignedUrl(newFileName);
			return newFileURL;
		}

	}

}
