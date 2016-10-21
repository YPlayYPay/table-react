/**
 * Created by Administrator on 2016/10/21.
 */
import React from 'react';

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
    render() {
        return (
            <div className="wrap-style">
                {
                    this.props.columns.map((result, index) => (
                            <div key={index} className="item">{result.title}</div>
                        )
                    )
                }
            </div>
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
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header columns={this.props.columns}/>
                <Content data={this.props.data}/>
            </div>
        )
    }
}

React.render(
    <Table columns={columns} data={data}/>,
    destination
);