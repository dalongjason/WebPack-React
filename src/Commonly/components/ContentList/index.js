import React, { Component } from 'react';

class ContentList extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        let {diags=[],gradeText=''}= this.props.Data;
        return(
            <div className={'ContentList'}>
                <div className={'TitleName'}>{gradeText}</div>
                <div className='content'>
                    {diags.map(({text='',suggs=[],order=''},index)=>(
                        <div className={'diagsbox'} key={index}>
                            <div className={'diagsboxname'}>{order}.&nbsp;{text}</div>
                            <div className={'son'}>
                                {this.Suggs(suggs)}
                            </div>
                        </div>
                    ))}
                    {diags.length<=0&&<div className={'diagsbox'}>无</div>}
                </div>
            </div>
        )
    }
    Suggs=(suggs=[])=>{
            return suggs.map(({order='',text=''},index)=><p className={'text'} key={index}>{`（${order}）${text}`}</p>);
    }
}

export default ContentList;