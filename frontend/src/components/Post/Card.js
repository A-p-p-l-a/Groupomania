import React, { useEffect, useState } from "react";
import { isEmpty, datePostParser } from "../Utils";
import { useSelector } from "react-redux";

const Card = ({post}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.users);
   

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    }, [usersData]);

    return (
        <li className="card-container" key={post._id}>
            {isLoading ? (
                <i className="img-spiner-a-mettre-ici">...</i>
            ) : (
                <>
                    <div className="card-left">
                        <img src={
                            !isEmpty(usersData[0]) && usersData.map((user) => {
                                if (user._id === post.posterId) return user.picture;
                                else return null;
                            })
                            .join("")
                        }
                        alt="poster-pic"
                        />
                        <div className="pseudo">
                            <h3>
                                {!isEmpty(usersData[0]) && usersData.map((user) => {
                                    if (user._id === post.posterId) return user.pseudo;
                                    else return null;
                                })
                                    .join("")}
                            </h3>
                        </div>
                        <div className="card-header">  
                            <h2>Poster le: </h2><span>{datePostParser(post.createdAt)}</span>        
                        </div>
                    </div>
                    <div className="card-right">
                        
                        <p>{post.message}</p>
                        {post.picture && (
                            <img src={post.picture} alt="card-pic" className="card-pic" />
                        )}
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;