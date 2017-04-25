# AuthenticatedComponent
React Higher Order Component example to enhance your component with an authentication check.


Example usage:

```js
import React from "react";
import { requireAuthentication } from "../src/AuthenticatedComponent";

// Define your component
// Note: just export here so that you can do tests with the base version of this component
export class MyPrivateComponent extends React.Component {
    render() {
        return (
            <div>
                My secret search, that is only viewable by authenticated users.
            </div>
        );
    }
}

// Then export the default version wrapped with the HOC function requireAuthentication
export default requireAuthentication(MyPrivateComponent);
```
