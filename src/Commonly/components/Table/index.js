import React, { Component } from 'react';

import '../../../Public/Less/Table.less';

class Table extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {Thead=[],Tbody=[],className}=this.props;
        console.log(Tbody);
        return(
            <div className={`Table ${className}` }>
                <table cellSpacing='0'>
                    <thead>
                        <tr>
                            {Thead.map(({header,visible=true,style},index)=>visible&&(<th key={index} {...style}>{header.label}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {Tbody.map((item,index)=>{
                            let {fieldAbnormal=1}=item;
                            return(
                                <tr key={index} className={fieldAbnormal==0?'abnormal':''}>
                                    {Thead.map(({property,visible=true,style},index)=>visible&&(<td key={index} {...style}>{item[property]}</td>))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Table;