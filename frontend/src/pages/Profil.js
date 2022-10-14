import React from 'react';
import Log from "../components/Log"

import UpdateProfil from "../components/Profil/UpdateProfil";
import { useSelector } from 'react-redux';

const Profil = () => {

    const user = useSelector((state) => state.user);

    return (
        <div className="identification-page">

            {user ? (
                <UpdateProfil />
            ) : (
                <div className="log-container">
                    <Log signin={false} signup={true} />
                </div>
            )}

        </div>
    );
};

export default Profil;