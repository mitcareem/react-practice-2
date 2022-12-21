import React from 'react'

const User = () => {
    if (true) {
        throw new Error("Custom Error!")
    }
    return (
        <div>
            <h1>I am a user component!</h1>
        </div>
    )
}

export default User;
