/**
 * Created by Administrator on 2016/10/21.
 */
import React from 'react';
import $ from 'jquery';

let destination = document.querySelector("#example");

let data = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    gender: '女'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    gender: '男'
}];

let columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '性别',
        dataIndex: 'address',
        key: 'gender',
    }
];

//header
class Header extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('a');
    }

    render() {
        let colNodes = this.props.columns.map(function (result, index) {
               if(result.key=='gender'){
                    return(
                        <div key={index} className="item" >
                                    {result.title}
                        </div>
                    )
               }
                   return(
                       <div key={index} className="item">{result.title}</div>
                   )
            }
        );
        return (
                <div className="wrap-style" onClick={this.handleClick}>
                        {colNodes}
                </div>
        )
    }
}

class Classify extends React.Component{
    constructor(props){
        super(props)
    }

    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
                <form className="classify" onSubmit={this.handleSubmit}>
                    <input type="checkbox" name="gender" value='male'/>男
                    <input type="checkbox" name="gender" value='female'/>女
                </form>
        )
        
    }
}


//data
class Content extends React.Component {
    render() {
        let RowNodes = this.props.data.map(function (row, index) {
            return (
                <Row row={row} key={index}>
                </Row>
            )
        });
        return (
            <div>
                {RowNodes}
            </div>
        )
    }
}

class Row extends React.Component {
    render() {
        let row = this.props.row;
        var brr = [];
        for (var k in row) {
            if (k == 'key') {
                continue
            }
            brr.push(row[k])
        }
        let CellNodes = brr.map(function (cell, index) {
            return (
                <Cell cell={cell} key={index}>
                </Cell>
            )
        });
        return (
            <div className="wrap-style">
                {CellNodes}
            </div>
        )
    }
}

class Cell extends React.Component {
    render() {
        return (
            <div className="item">
                {this.props.cell}
            </div>
        )
    }
}

class Table extends React.Component {
    constructor() {
        super();
        this.state = {};

    }



    render() {
        return (
            <div className="zz">
                <Header columns={this.props.columns}  />
                <Content data={this.props.data}/>
                <Classify />
            </div>
        )
    }
}

React.render(
    <Table columns={columns} data={data} colSelect={columns[2].key}/>,
    destination
);