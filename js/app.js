/*Hello World!*/
import React from 'react';
var _ = require('lodash');
var $ = require('jquery');

let destination = document.querySelector("#example");

let data = [
    {'n1': '男', 'n2': 1},
    {'n1': '男', 'n2': 2},
    {'n1': '男', 'n2': 3},
    {'n1': '女', 'n2': 4},
    {'n1': '女', 'n2': 5}
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

class MoreList extends React.Component {
    render() {
        return (
            <div className="wrap-style">
                <div className="more" onClick={this.props.onClick}>
                    刷新
                </div>
            </div>
        )
    }
}

class Category extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.btnClickm}>男生</button>
                <button onClick={this.props.btnClickf}>女生</button>
            </div>
        )
    }
}

class ReactTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.btnClickm = this.btnClickm.bind(this);
        this.btnClickf = this.btnClickf.bind(this);
        this.state = {
            data: props.data,
            data1: props.data
        }
    }

    handleClick() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (v) {
                let that = this;
                $.each(v, function () {
                    that.state.data.push(this);
                    that.setState({
                        data: that.state.data1
                    });
                })
            }.bind(this)
        });
    };

    btnClickm() {
        var data = this.state.data1;
        data = _.filter(data, _.matches({'n1': '男'}));
        this.setState({
            data: data
        })
    }

    btnClickf() {
        let data = this.state.data1;
        data = _.filter(data, _.matches({'n1': '女'}));
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div>
                <Category btnClickm={this.btnClickm} btnClickf={this.btnClickf}/>
                <Title columns={this.props.columns}/>
                <List data={this.state.data}/>
                <MoreList onClick={this.handleClick}/>
            </div>
        )
    }
}

React.render(
    <ReactTable data={data} columns={columns} url='../ts.json'/>,
    destination
);
