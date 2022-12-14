import React, { useEffect, useState } from "react";
import { isEmpty, datePostParser } from "../Utils";
import { useDispatch, useSelector } from "react-redux";
import LikeButton from '../LikeButton';
import CardComments from '../CardComments';
import { updatePost, deletePost, getPosts } from "../../actions/post.actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faEdit, faTrashAlt, faImage } from '@fortawesome/free-regular-svg-icons';

const Card = ({post}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const [postPicture, setPostPicture] = useState(null);
    const [file, setFile] = useState();
    const [showComments, setShowComments] = useState(false);
    const usersData = useSelector((state) => state.users);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
   
    const updateItem = async() => {
        console.log(textUpdate)
        console.log(postPicture)
        if (textUpdate || postPicture) {
            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', textUpdate);
            if (file) data.append("file", file);
            
            await dispatch(updatePost(post._id, data));
            dispatch(getPosts());
        } 
        setIsUpdated(false);
    };

    const handlePicture = (e) => {
        console.log('edit')
        console.log(e)
        console.log(e.target.files[0])
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
      }; 

    const deleteQuote = () => dispatch(deletePost(post._id));

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
        // On initialise la valeur de textUpdate
        setTextUpdate(post.message)
    }, [usersData, post.message]);

 
    return (
        <li className="card-container" key={post._id}>
            {isLoading ? (
                <i className="img-spiner-a-mettre-ici">...</i>
            ) : (
                <>
                    <div className="card-left">
                        <div className="pseudo">
                            <img src={
                                !isEmpty(usersData[0]) && usersData.map((user) => {
                                    if (user._id === post.posterId) return user.picture;
                                    else return null;
                                })
                                .join("")
                            }
                            alt="poster-pic"
                            />
                            <h3>
                                {!isEmpty(usersData[0]) && usersData.map((user) => {
                                    if (user._id === post.posterId) return user.pseudo;
                                    else return null;
                                })
                                    .join("")}
                            </h3>
                        </div>
                        <div className="card-header">  
                            <span>{datePostParser(post.createdAt)}</span>        
                        </div>
                    </div>
                    <div className="card-right">
                        <div className="message-post">
                            {isUpdated === false && <p>{post.message}</p>}
                            {isUpdated && (
                            <div className="update-post">
                                <textarea defaultValue={post.message}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                />
                                <div className="icon">
                                    <FontAwesomeIcon icon={faImage} />
                                    <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => handlePicture(e)} />
                                </div>
                                <div className="button-container">
                                    <button className="btn" onClick={updateItem}>
                                        Valider modification
                                    </button>
                                </div>
                            </div>
                            )}
                            {post.picture && (
                                <img src={post.picture} alt="card-pic" className="card-pic"
                                onChange={(e) => handlePicture(e)}
                                />
                            )}
                            
                        </div>
                    <div className="card-footer">
                        <div className="card-footer-icon">            
                            <div className="comment-icon">
                                <div className="icon" onClick={() => setShowComments(!showComments)}>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </div>
                                <span>{post.comments.length}</span>
                            </div>
                            <div className="like-icon">
                                <LikeButton post={post} />
                            </div>
                            {
                                (() => {
                                    if(userData._id === post.posterId) {
                                            return (
                                                <div className="button-container">
                                                    <div className="icon icon-space" onClick={() => setIsUpdated(!isUpdated)}>
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </div>
                                                    <div className="icon"
                                                        onClick={() => {
                                                            if (window.confirm("Voulez-vous supprimer cet article ?")) {
                                                            deleteQuote();
                                                            }
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </div>
                                                </div>
                                            )
                                        } else if(userData._id === process.env.REACT_APP_ADMIN_RIGHT) {
                                            return (
                                                <div className="button-container">
                                                    <div className="icon icon-space" onClick={() => setIsUpdated(!isUpdated)}>
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </div>
                                                    <div className="icon"
                                                        onClick={() => {
                                                            if (window.confirm("Voulez-vous supprimer cet article ?")) {
                                                            deleteQuote();
                                                            }
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                })()  
                            }
                        </div>
                        {showComments && <CardComments post={post} />}
                    </div>
                </div>
                    
                </>
            )}
        </li>
    );
};
export default Card;