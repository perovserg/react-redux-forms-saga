import React from 'react';
import {connect} from 'react-redux';
import {Table, Column} from 'react-virtualized';
import 'react-virtualized/styles.css';

import {moduleName, fetchAll, selectEvent, eventListSelector} from '../../ducks/events';
import Loader from '../common/Loader';

export class VirtualizedEventsList extends React.Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        if (this.props.loading) return <Loader/>;
        return (
            <Table width={700}
                   height={300}
                   rowHeight={40}
                   headerHeight={50}
                   overscanRowCount={5} // число строк для рендера сверху и снизу по 5 шт.
                   rowGetter={this.rowGetter}
                   rowCount={this.props.events.length}
                   onRowClick={this.handleRowClick}
            >
                <Column
                    width={300}
                    label="title"
                    dataKey="title"
                />
                <Column
                    width={250}
                    label="where"
                    dataKey="where"
                />
                <Column
                    width={150}
                    label="when"
                    dataKey="month"
                />
            </Table>
        );
    }

    rowGetter = ({index}) => {
        return this.props.events[index];
    };

    handleRowClick = (rowData) => {
        this.props.selectEvent(rowData.uid);
    };
}

export default connect(state => ({
    events: eventListSelector(state),
    loading: state[moduleName].loading
}), {fetchAll, selectEvent})(VirtualizedEventsList);
