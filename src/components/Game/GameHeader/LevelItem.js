import React from 'react';

import './LevelItem.css';

const LevelItem = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="level_item">{props.children}</div>
    );
});

export default LevelItem;