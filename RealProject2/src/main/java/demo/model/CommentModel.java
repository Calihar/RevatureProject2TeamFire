package demo.model;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="Comment_Table")
public class CommentModel {
	
	
	@Id
	@Column(name="comment_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int commentId;
	
	@Column(name="comment_content", unique=false, nullable=false)
	String commentContent;
	
	@ManyToOne(cascade=CascadeType.MERGE, fetch=FetchType.LAZY)			
	@JoinColumn(name="user_id_FK")
	UserModel myOwner;
	
	@ManyToOne(cascade=CascadeType.MERGE, fetch=FetchType.LAZY)			
	@JoinColumn(name="post_id_FK")
	PostModel myPost;
	
	@Column(name="submit_time", unique=false, nullable=false)
	Timestamp submitTime;

	public CommentModel(String commentContent, UserModel myOwner, PostModel myPost, Timestamp submitTime) {
		super();
		this.commentContent = commentContent;
		this.myOwner = myOwner;
		this.myPost = myPost;
		this.submitTime = submitTime;
	}

	public CommentModel(int commentId, String commentContent, UserModel myOwner, PostModel myPost,
			Timestamp submitTime) {
		super();
		this.commentId = commentId;
		this.commentContent = commentContent;
		this.myOwner = myOwner;
		this.myPost = myPost;
		this.submitTime = submitTime;
	}

	@Override
	public String toString() {
		return "CommentModel [commentId=" + commentId + ", commentContent=" + commentContent + ", myOwner=" 
				+ myOwner.getFirstName() + " " + myOwner.getLastName()
				+ ", myPost=" + myPost + ", submitTime=" + submitTime + "]";
	}
	
	
	
	
	

}
