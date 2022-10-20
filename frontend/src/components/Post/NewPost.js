import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";

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
    setPostPicture("");
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
          <div className="post-form-preview">
            {message || postPicture > 20 ? (
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
                    <img src={postPicture} alt="" />
                  </div>

              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                <img src="./img/icons/image-regular.svg" alt="img" />
                <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png"
                    onChange={(e) => handlePicture(e)}
                />
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || postPicture > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default NewPostForm;