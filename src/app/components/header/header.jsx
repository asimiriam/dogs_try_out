import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../slice';


import './header.scss';

export default function Header() {
    const name = "Dogs Try-Out";
    const { lang } = useSelector(store => store.lang);
    const dispatch = useDispatch();


    const renderLanguageButtons = () => {
        const languages = ['en', 'es'];
        return languages.map((language) => {
            const classNameButton = lang === language ? 'lang-btn lang-btn-active' : 'lang-btn';
            return (
                <button
                    key={language}
                    id={language}
                    value={language}
                    type="button"
                    className={classNameButton}
                    onClick={() => dispatch(setLang(language))}
                >
                    {language.toUpperCase()}
                </button>
            );
        });
    }

    return (
        <React.Fragment>
            <section className="header">
                <div id="name-app" className="title">
                    {name.toUpperCase()}
                </div>
                <div className="title lang-buttons">
                    {renderLanguageButtons()}
                </div>
            </section>
        </React.Fragment>
    );
}

Header.propTypes = {
};

Header.defaultProps = {
};
