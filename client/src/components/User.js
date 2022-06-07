import React from "react";

export default ({ user }) => {
    return (
        <div>
            <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{user.name}</h5>
        </div>
    )
}