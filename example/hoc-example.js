/**
 * Auth Component
 *
 * A HOC example for checking if the user is authenticated in your private component.
 *
 * ES7 Decorator Example
 *
 * @copyright 2016 Aspirantic.com
 * @web https://www.aspirantic.com
 * @version 1.0
 */

import React from "react";
import {requireAuthentication} from "../src/AuthenticatedComponent";

export class MyPrivateComponent extends React.Component {
    /**
     * Render
     *
     * @returns React.Component
     */
    render() {
        return (
            <div>
                My secret search, that is only viewable by authenticated users.
            </div>
        );
    }
}

// Using requireAuthentication with higher order syntax
export default requireAuthentication(MyPrivateComponent);
