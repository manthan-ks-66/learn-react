import React from "react";

const UserContext = React.createContext();

export default UserContext;

// we can wrap this in a UserContext so that we can provide data ot all the components wrapped in UserContext
{
  /* 
<Login />
<Card>
        <Data />
</Card>
 */
}

// like this
{
  /**
     <UserContext >
        <Login />
        <Card>
            <Data />
        </Card>
    </UserContext>
     */
}
