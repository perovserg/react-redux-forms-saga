import React from 'react';
import {connect} from 'react-redux';
import {Table, Column, InfiniteLoader} from 'react-virtualized';
import 'react-virtualized/styles.css';

import {moduleName, fetchLazy, selectEvent, eventListSelector} from '../../ducks/events';

export class VirtualizedEventsList extends React.Component {

    componentDidMount() {
        this.props.fetchLazy();
    }

    render() {
        return (
            <InfiniteLoader
                loadMoreRows={this.loadMoreRows}
                isRowLoaded={this.isRowLoaded}
                rowCount={this.props.loaded ? this.props.events.length : this.props.events.length + 1}
            >
                {({onRowsRendered, registerChild}) =>
                    <Table
                        ref={registerChild}
                        onRowsRendered={onRowsRendered}
                        width={700}
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
                }
            </InfiniteLoader>
        );
    }

    loadMoreRows = () => {
        this.props.fetchLazy();
    };

    isRowLoaded = ({index}) => index < this.props.events.length;

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
}), {fetchLazy, selectEvent})(VirtualizedEventsList);
