import React, { useContext } from "react";
import Log from "../components/Log"
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/UpdateProfil";


const Profil = () => {

    const uid = useContext(UidContext);

    return (
        <div className="identification-page">

            {uid ? (
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