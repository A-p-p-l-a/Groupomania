import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Newfeed = () => {
    
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post);

    useEffect(() => {
        if (loadPost) {
          dispatch(getPosts());
          setLoadPost(false);
        }
    }, [loadPost, dispatch]);

    return (
        <div className="newfeed-container">
            <ul>
                {!isEmpty(posts[0]) &&
                posts.map((post) => {
                    return <Card post={post} key={post._id} />;
                 })}
            </ul>
        </div>
    );
};

export default Newfeed;