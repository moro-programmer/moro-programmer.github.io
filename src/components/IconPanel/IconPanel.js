import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './IconPanel.scss';

const IconPanel = (props)=> {
    const {icon, iconAlign = 'baseline'} = props;

    return (
        <div {...props} className={classNames('hs-icon-panel', props.className)}>
            <span className='icon-block' style={{verticalAlign: iconAlign}}>
                <i className={classNames('ico', `${icon}`, 'icon')}/>
            </span>
            <div className='text-block'>
                {props.children}
            </div>
        </div>
    );
};

IconPanel.propTypes = {
    icon: PropTypes.string.isRequired,
    iconAlign: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default IconPanel;
