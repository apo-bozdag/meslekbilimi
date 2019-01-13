import React, {Component} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react'

const LoaderHOC = (WrappedComponent, field) => {
    const loader = <Dimmer active>
                        <Loader/>
                   </Dimmer>;
    return class LoaderHOC extends Component {
        render() {
            return this.props[field].length === 0 ? loader : <WrappedComponent {...this.props} />
        }
    }
};

export default LoaderHOC;