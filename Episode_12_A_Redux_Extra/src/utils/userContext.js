import React from 'react';

const userContext = React.createContext({
    loggedInUser: "Default User",
}) // null is the default value

export default userContext;