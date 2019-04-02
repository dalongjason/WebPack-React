import React, { Component } from 'react';
// import * as Table from 'reactabular-table';
import Table from '../Table';

class TableBox extends Component {
    constructor(props) {
        super(props);

    }

        render() {
            let {Data=[],Name='默认标题',TableName=[],kays=''} = this.props;
            return(
                <div className={'TableBox'}>
                    <div className={'TitleName'}>{Name}</div>
                    <Table Thead={TableName} Tbody={Data} className={'table'} />
                </div>
            )
        }

}

export default TableBox;