import React, { Component } from 'react';

class Definitions extends Component {
    render() {
        const { data } = this.props;

        return (
            <dl>
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        <dt>{item.dt}</dt>
                        <dd>{item.dd}</dd>
                    </React.Fragment>
                ))}
            </dl>
        );
    }
}

export default Definitions;
