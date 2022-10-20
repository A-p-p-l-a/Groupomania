
import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useDispatch } from 'react-redux';
import { likePost, unlikePost } from "../../actions/post.actions";


const LikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();
  
    const like = () => {
      dispatch(likePost(post._id, uid))
      setLiked(true);
    };
  
    const unlike = () => {
      dispatch(unlikePost(post._id, uid))
      setLiked(false);
    };
  
    useEffect(() => {
      if (post.likers.includes(uid)) setLiked(true);
      else setLiked(false);
    }, [uid, post.likers, liked]);
  
    return (
      <div className="like-container">
        {uid && liked === false && (
          <div className="icon">
            <img src="./img/icons/thumbs-up-solid.svg" onClick={like} alt="like" />
            <span>{post.likers.length}</span>
          </div>
        )}
        {uid && liked && (
          <div className="icon">
            <img src="./img/icons/thumbs-up-solid.svg" onClick={unlike} alt="unlike" />
            <span>{post.likers.length}</span>
          </div>
          
        )}
        
      </div>
    );
  };
  
  export default LikeButton;