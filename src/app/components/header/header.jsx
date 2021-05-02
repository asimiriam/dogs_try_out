import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

export default function Header() {
    const name = "Dogs Try-Out"
    return (
        <React.Fragment>
            <section className="header">
                <div id="name-app" className="title">
                    {name.toUpperCase()}
                </div>
            </section>
        </React.Fragment>
    );
}

Header.propTypes = {
};

Header.defaultProps = {
};
