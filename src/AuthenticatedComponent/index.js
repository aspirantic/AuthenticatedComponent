/**
 * Auth Component
 *
 * A HOC example for checking if the user is authenticated in your private component.
 *
 * @copyright 2016 Aspirantic.com
 * @web https://www.aspirantic.com
 * @version 1.0
 */

import React from "react";

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {

        /**
         * Function that redirects to the login page
         */
        // redirectToLoginPage(referrer) {
            // You could redirect to your login page from here:

            // Using react-redux and react-router or react-router-redux
            // this.props.dispatch(push(`/login?next=${referrer}`));

            // Or by just using reacr-router
            // push(`/login?next=${referrer}`)
        // }

        /**
         * Check if user is authenticated and then redirect to login page
         */
        //componentDidMount() {
            // if (!this.isAuthenticated()) {
                // this.redirectToLoginPage(this.props.location.pathname);
            // }
        // }

        /**
         * Check if the user is authenticated
         *
         * @returns {AuthenticatedComponent.isAuthenticated}
         */
        isAuthenticated() {
            // Pass a property of your global state to this component, so that you can easily check wheather
            // the user is authenticated or not.
            return this.props.isAuthenticated;
        }

        /**
         * Render
         *
         * @returns {XML}
         */
        render() {
            const loginErrorMessage = (
                <div>
                    Please <Link to={{pathname: '/'}}>login</Link> in order to view this part of the application.
                </div>
            );

            return (
                <div>
                    { this.isAuthenticated() === true ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }
    };
}

export default requireAuthentication;
