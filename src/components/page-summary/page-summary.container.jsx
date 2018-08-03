import React from 'react';
import PropTypes from 'prop-types';

import { getPageSummaryById } from '../../services/api/page-summary.service';


class PageSummaryContainer extends React.Component {
    static propTypes = {
        match: PropTypes.object
    }

    constructor() {
        super();
        this.state = { summary: null };
    }

    componentDidMount() {
        const { params } =  this.props.match;
        getPageSummaryById(params.id).then(summary => this.setState({ summary }));
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.summary && this.state.summary.html}}></div>
        )
    }
}

export default PageSummaryContainer;