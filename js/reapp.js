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

class Classify extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id="classify">
                <input type="checkbox" name="gender" value='male'/>男
                <input type="checkbox" name="gender" value='female'/>女
                <input type="submit" value='ok' onClick={this.props.handleSubmit}/>
            </form>
        )
    }
}


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.show = this.show.bind(this);
    }
    show() {
        var cl = document.querySelector('#classify');
        if (cl.style.display == 'block') {
            cl.style.display = 'none'
        } else {
            cl.style.display = 'block'
        }
    }
    handleClick(e) {
        if (e.target.innerHTML == '性别') {
            this.show();
        }
    }

    render() {
        let colNodes = this.props.columns.map(function (result, index) {
                if (result.key == 'gender') {
                    return (
                        <div key={index} className="item">
                            {result.title}
                        </div>
                    )
                }
                return (
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
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log($('#classify').serialize());
    }
    render() {
        return (
            <div className="zz">
                <Header columns={this.props.columns}/>
                <Content data={this.props.data}/>
                <Classify url={this.props.url} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

React.render(
    <Table columns={columns} data={data} colSelect={columns[2].key} url='url'/>,
    destination
);