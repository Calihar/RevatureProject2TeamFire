package demo.controller;

import java.io.IOException;
import java.sql.Timestamp;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.UserModel;
import demo.model.UserModel.UserType;
import demo.util.StorageService;

@RestController
public class UserController {

	// FIELDS\\
	private UserDao userDao;
	private PostDao postDao;
	private CommentDao commentDao;

	@Autowired
	private StorageService storageServ;

	// CONSTRUCTORS\\
	@Autowired
	public UserController(UserDao userDao, PostDao postDao, CommentDao commentDao) {
		super();
		this.userDao = userDao;
		this.postDao = postDao;
		this.commentDao = commentDao;
	}

	// ENDPOINTS\\

	// DB ACCESSING\\
	@PostMapping("/l-authentication")
	public String loginToHomePage(HttpSession session, @RequestBody UserModel reqUser) {
		System.out.println("In the user/login controller");

		UserModel dbUser = loginAuthentication(reqUser);
		if (dbUser == null) {
			return "/login";
		}
		session.setAttribute("loggedUser", dbUser);

		return "/home";
	}

	@PostMapping("/r-authentication")
	public String registerToHomePage(HttpSession session, @RequestBody UserModel reqUser) {
		System.out.println("In the user/register controller");

		UserModel dbCheck = loginAuthentication(reqUser);
		if (dbCheck != null) {
			return "/login";
		}
		
		reqUser.setUserType(UserType.General);
		reqUser.setCreationDate(new Timestamp(System.currentTimeMillis()));
		UserModel newUser = userDao.save(reqUser);

		session.setAttribute("loggedUser", newUser);

		return "/home";
	}

	@Deprecated
	@GetMapping("/profile/user")
	public UserModel currentUserProfile(HttpSession session) {
		UserModel tempUser = (UserModel) session.getAttribute("loggedUser");

		return tempUser;
	}

	@GetMapping("/profile/{username}")
	public UserModel pathUserProfile(@PathVariable("username") String username) {
		UserModel tempUser = userDao.findByUsername(username);

		return tempUser;
	}

	@PostMapping("/profile/update")
	public UserModel updateUserProfile(HttpSession session, @RequestBody UserModel reqUser) {
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (reqUser != null) {
			currentUser.updateObject(reqUser);
			session.setAttribute("loggedUser", currentUser);
			return userDao.save(currentUser);
		}

		return currentUser;
	}
	
	@PostMapping("/profile/picture")
	public String updateProfilePicture(HttpSession session, @RequestParam(value="file") MultipartFile file) throws IOException {
		UserModel currentUser = (UserModel) session.getAttribute("loggedUser");
		if (currentUser != null) {
			String newFileName = storageServ.uploadAWSFile(file);
			currentUser.setProfilePicName(newFileName);
			userDao.save(currentUser);
			
			return storageServ.presignedUrl(newFileName);
		}
		
		return null;
	}

	// HELPER METHODS\\
	public UserModel loginAuthentication(UserModel reqUser) {
		System.out.println("reqUser: " + reqUser);
		UserModel dbUser = userDao.findByUsername(reqUser.getUsername());
		System.out.println("dbUser: " + dbUser);
		if (dbUser != null) {
			
			if (dbUser.getPassword().equals(reqUser.getPassword())) {
				return dbUser;
			}
		}
		return null;
	}

}
