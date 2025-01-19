The solution involves checking if the `user` prop is defined before attempting to access its properties.  Using optional chaining (`?.`) allows for safe access, preventing the error.  If `user` is undefined, the component renders a placeholder instead.

```javascript
// Corrected component
function UserProfile({ user }) {
  return (
    <View>
      <Text>Name: {user?.name || 'Loading...'}</Text> 
    </View>
  );
}
```

Alternatively, you could use a loading state to improve user experience and make the data fetching more explicit:

```javascript
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fetch Data here
    fetchUserData().then(data => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  if(loading){
    return <Text>Loading...</Text>
  }
  return (
    <View>
       <Text>Name: {user?.name}</Text>
    </View>
  );
}
```