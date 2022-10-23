import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NewPost from "../components/NewPost"
import Newfeed from "../components/Newfeed";
import Log from "../components/Log";

const Home = () => {

    const uid = useContext(UidContext);

    return (
        <div className="home">
            <div>
                {uid ? <NewPost /> : <Log signin={true} signup={false} />}
            </div>
            <div className="newfeed">
                <Newfeed />
            </div>
        </div>
    );
};

export default Home;