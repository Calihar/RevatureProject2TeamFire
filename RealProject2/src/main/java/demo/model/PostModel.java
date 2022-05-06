package demo.model;

import java.sql.Timestamp;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="Post_Table")
public class PostModel {
	
	@Id
	@Column(name="post_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int postId;
		
	@Column(name="post_rating", unique=false, nullable=true)
	int postRating;
	
	@Column(name="review_item", unique=false, nullable=true)
	String reviewItem;
	
	@Column(name="item_type", unique=false, nullable=false)
	ItemType itemType;
	
	@Column(name="post_content", unique=false, nullable=false)
	String postContent;
	
	@ManyToOne(cascade=CascadeType.MERGE, fetch=FetchType.LAZY)
	@JoinColumn(name="user_id_FK")
	UserModel myOwner;
	
	@Column(name="submit_date", unique=false, nullable=false)
	Timestamp submitTime;
	
	@ManyToMany(cascade=CascadeType.MERGE, fetch=FetchType.EAGER)
	@JoinColumn(name="likes_id_FK")
	ArrayList<UserModel> userLikesList;
	
	@OneToMany(fetch=FetchType.LAZY)
	ArrayList<CommentModel> commentList;
	
	
//	PICTURE VAR GOES HERE
	
	enum ItemType {
		Movie,
		VideoGame,
		Book
	}


	public PostModel(int postRating, String reviewItem, ItemType itemType, String postContent,
			UserModel myOwner, Timestamp submitTime, ArrayList<UserModel> userLikesList,
			ArrayList<CommentModel> commentList) {
		super();
		this.postRating = postRating;
		this.reviewItem = reviewItem;
		this.itemType = itemType;
		this.postContent = postContent;
		this.myOwner = myOwner;
		this.submitTime = submitTime;
		this.userLikesList = userLikesList;
		this.commentList = commentList;
	}
	
	public PostModel(int postId, int postRating, String reviewItem, ItemType itemType, String postContent,
			UserModel myOwner, Timestamp submitTime, ArrayList<UserModel> userLikesList,
			ArrayList<CommentModel> commentList) {
		super();
		this.postId = postId;
		this.postRating = postRating;
		this.reviewItem = reviewItem;
		this.itemType = itemType;
		this.postContent = postContent;
		this.myOwner = myOwner;
		this.submitTime = submitTime;
		this.userLikesList = userLikesList;
		this.commentList = commentList;
	}

	@Override
	public String toString() {
		return "PostModel [postId=" + postId + ", postRating=" + postRating + ", reviewItem=" + reviewItem
				+ ", itemType=" + itemType + ", postContent=" + postContent + ", myOwner=" + myOwner.getFirstName() + " " + myOwner.getLastName() + ", submitTime="
				+ submitTime + ", userLikesList=" + userLikesList + ", commentList=" + commentList + "]";
	}

	
	
	

}
