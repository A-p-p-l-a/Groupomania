import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../actions/post.actions";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";



const CardComments = ({ post, comment }) => {
  
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.users);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
  };

  return (
    <div className="comments-container">
        {post.comments.map((comment) => {
            return (
                <div className={comment.commenterId === userData._id ? "comment-container client" : "comment-container" }
                    key={comment._id} >
                    <div className="left-part">
                        <div className="user-info">
                            <img alt="commenter-pic" src={ !isEmpty(usersData[0]) && usersData.map((user) => {
                                if (user._id === comment.commenterId) return user.picture;
                                else return null;
                            }).join("")} />
                            <div className="pseudo">
                                <h3>{comment.commenterPseudo}</h3>
                            </div>
                        </div>
                        <div className="comment-header">
                            
                            <span>{timestampParser(comment.timestamp)}</span>
                        </div>
                    </div>
                    <div className="right-part">
                        <p>{comment.text}</p>
                        <EditDeleteComment comment={comment} postId={post._id} />
                    </div>
                </div>
            );
        })}
        {userData._id && (
            <form action="" onSubmit={handleComment} className="comment-form">
                <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Laisser un commentaire"/>
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        )}
    </div>
  );
};

export default CardComments;
