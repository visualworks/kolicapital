import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-two-thirds has-text-centered">
                                <h1 className="title tk-chaparral-pro">Köli Capital</h1>
                            </div>
                            <div className="column has-text-right">
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input" type="email" placeholder="Email" />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input" type="password" placeholder="Password" />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field is-grouped-right">
                                    <p className="control">
                                        <button className="button is-primary">Login</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}