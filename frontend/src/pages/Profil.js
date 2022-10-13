import React, { useContext } from 'react';
import Log from "../components/Log"
import { UidContext } from "../components/AppContext";

const Profil = () => {

    const uid = useContext(UidContext);

    return (
        <div className="identification-page">

            {uid ? (
                <h1>Profil</h1>
            ) : (
                <div className="log-container">
                    <Log signin={false} signup={true} />
                </div>
            )}

        </div>
    );
};

export default Profil;