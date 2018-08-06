import React from 'react';
import PropTypes from 'prop-types';

import PageSummary from './page-summary.component';
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
        const { summary } = this.state;
        
        if (!summary) {
            return '';
        }
        
        return <PageSummary html={summary.html}/>
    }
}

export default PageSummaryContainer;