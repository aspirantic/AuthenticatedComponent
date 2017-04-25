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

// Using requireAuthentication with es7 decorator syntax
@requireAuthentication
export default class MyPrivateComponent extends React.Component {
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
