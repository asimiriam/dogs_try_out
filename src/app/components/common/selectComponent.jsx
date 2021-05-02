import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default function SelectComponent(props) {
    const { id, label } = props;
    const classLabel = label ? 'div-select-with-label-up' : 'div-select';
    return (
        <div className={classLabel} id={id}>
            { label
                && <div className="div-label-select">{label}</div>
            }
            <Select
                {...props}
            />
        </div>
    );
}

SelectComponent.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
};

SelectComponent.defaultProps = {
    id: '',
    label: '',
};
