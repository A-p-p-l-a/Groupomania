import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.actions";
import Card from "../Card";
import { isEmpty } from "../Utils";

const Newfeed = () => {
    
    const [loadPost, setLoadPost] = useState(true);
    const [count, setCount] = useState(10);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post);

    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
          setLoadPost(true);
        }
      }

    useEffect(() => {
        if (loadPost) {
          dispatch(getPosts(count));
          setLoadPost(false);
          setCount(count + 10);
        }

        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadPost]);


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