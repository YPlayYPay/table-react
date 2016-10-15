/*Hello World!*/
import React from 'react';
var _ = require('lodash');


let destination = document.querySelector("#example");

let data = [
    {'n1': '男', 'n2': 1, 'n3': 'ca'},
    {'n1': '女', 'n2': 1, 'n3': 'ca'},
    {'n1': '女', 'n2': 1, 'n3': 'ca'}
];

let columns = [
    {col1: '性别', col2: '年龄'}
];

//header section
class Title extends React.Component {
    render() {
        let ColumnNodes = this.props.columns.map(function (col, i) {
            return (
                <Col col={col} key={i}>
                </Col>
            )
        });
        return (
            <div className="wrap-style">
                {ColumnNodes}
            </div>
        )
    }
}
class Ti extends React.Component {
    render() {
        return (
            <div className="item">
                {this.props.ti}
            </div>
        )
    }
}

class Col extends React.Component {
    render() {
        let col = this.props.col;
        var grr = [];
        for (var k in col) {
            grr.push(col[k])
        }
        let TiNodes = _.map(grr, function (ti, i) {
            return (
                <Ti ti={ti} key={i}>
                </Ti>
            )
        });
        return (
            <div className="second-style">
                {TiNodes}
            </div>
        )
    }
}
//数据
class Cell extends React.Component {
    render() {
        return (
            <div className="item">
                {this.props.cell}
            </div>
        )
    }
}

class Row extends React.Component {
    render() {
        let row = this.props.row;
        var brr = [];
        for (var k in row) {
            brr.push(row[k])
        }
        let CellNodes = _.map(brr, function (cell, i) {
            return (
                <Cell cell={cell} key={i}>
                </Cell>
            )
        });
        return (
            <div className="second-style">
                {CellNodes}
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        let RowNodes = this.props.data.map(function (row, i) {
            return (
                <Row row={row} key={i}>
                </Row>
            )
        });
        return (
            <div className="wrap-style">
                {RowNodes}
            </div>
        )
    }
}


class ReactTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Title columns={this.props.columns}/>
                <List data={this.props.data}/>
            </div>
        )
    }
}

React.render(
    <ReactTable data={data} columns={columns} url='../ts.json'/>,
    destination
);
