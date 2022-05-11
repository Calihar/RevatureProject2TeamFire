package demo.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="User_Table")
public class UserModel {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	
	@Column(name="username", unique=true, nullable=false, length=14)
	private String username;
	
	@Column(name="hashed_password", unique=false, nullable=false)
	private String password;
	
	@Column(name="first_name", unique=false, nullable=false, length=14)
	private String firstName;
	
	@Column(name="last_name", unique=false, nullable=false, length=14)
	private String lastName;
	
	@Column(name="user_email", unique=false, nullable=false)
	private String userEmail;
	
	@Column(name="user_type", unique=false, nullable=false)
	private UserType userType;
	
	@Column(name="creation_date", unique=false, nullable=false)
	private Timestamp creationDate;
	
	@Column(name="user_birthday", unique=false, nullable=true)
	private Timestamp userBirthday;
	
	@Column(name="user_bio", unique=false, nullable=true)
	private String userBio;
	
	@Column(name="review_count", unique=false, nullable=false)			
	private int reviewCount;
	
	@OneToMany(fetch=FetchType.LAZY)
	private List<PostModel> postList;
	
	@OneToMany(fetch=FetchType.LAZY)
	private List<CommentModel> commentList;
	
	
	enum UserType {
		General,
		Admin
	}


	public UserModel(String username, String password, String firstName, String lastName, String userEmail,
			UserType userType, Timestamp creationDate, Timestamp userBirthday, String userBio, int reviewCount,
			ArrayList<PostModel> postList, ArrayList<CommentModel> commentList) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userEmail = userEmail;
		this.userType = userType;
		this.creationDate = creationDate;
		this.userBirthday = userBirthday;
		this.userBio = userBio;
		this.reviewCount = reviewCount;
		this.postList = postList;
		this.commentList = commentList;
	}


	public UserModel(int userId, String username, String password, String firstName, String lastName, String userEmail,
			UserType userType, Timestamp creationDate, Timestamp userBirthday, String userBio, int reviewCount,
			ArrayList<PostModel> postList, ArrayList<CommentModel> commentList) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userEmail = userEmail;
		this.userType = userType;
		this.creationDate = creationDate;
		this.userBirthday = userBirthday;
		this.userBio = userBio;
		this.reviewCount = reviewCount;
		this.postList = postList;
		this.commentList = commentList;
	}


	@Override
	public String toString() {
		return "UserModel [userId=" + userId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", userEmail=" + userEmail + ", userType=" + userType
				+ ", creationDate=" + creationDate + ", userBirthday=" + userBirthday + ", userBio=" + userBio
				+ ", reviewCount=" + reviewCount + ", postList=" + postList + ", commentList=" + commentList + "]";
	}
	
	
	

}
