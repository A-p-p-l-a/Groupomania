import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const NewPostForm = () => {
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.user);
  const error = useSelector((state) => state.error.postError);
  const dispatch = useDispatch();
  
  const handlePost = async () => {
    if (message || postPicture) {
      const data = new FormData();
      data.append('posterId', userData._id);
      data.append('message', message);
      if (file) data.append("file", file);

        await dispatch(addPost(data));
        dispatch(getPosts());
        cancelPost();
      } else {
      alert("Veuillez entrer un message")
    }
  };
 
  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }; 

  const cancelPost = () => {
    setMessage("");
    setPostPicture(null);
    setFile("");
  };

  return (
    <div className="post-container">
      <div className="post-form">
        <NavLink exact to="/profil">
          <div className="user-info">
            <img id="user-img" src={userData.picture} alt="user-img" /> 
          </div>
        </NavLink>
        <div className="message-decoration"> 
          <textarea name="message" id="message" placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
          />
        </div>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faImage} />
        <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => handlePicture(e)} />
      </div>
      {!isEmpty(error.format) && <p>{error.format}</p>}
      {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
      <div className="post-form-preview">
        {message || postPicture ? (
          <li className="card-container">
            <div className="card-header">
              <div className="user-info">
                <img src={userData.picture} alt="user-pic" />
                <div className="pseudo">
                  <h3>{userData.pseudo}</h3>
                </div>
              </div>
              <span>{timestampParser(Date.now())}</span>
            </div>
            <div className="content">
              <p>{message}</p>
              {postPicture!==null ? (
                <img src={postPicture} alt="post-pic" className="post-pic"/>
              ) : null}
            </div>
          </li>
        ) : null}
        <div className="footer-form">
          <div className="btn-send">
            {message || postPicture ? (
              <button className="cancel" onClick={cancelPost}>
                Annuler message
              </button>
            ) : null}
            <button className="send" onClick={handlePost}>
              Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;