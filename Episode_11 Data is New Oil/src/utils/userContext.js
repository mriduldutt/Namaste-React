import React from 'react';

const userContext = React.createContext({
    loggedInUser: "Default User",
},
{theme : 'light'}) // null is the default value



export default userContext;