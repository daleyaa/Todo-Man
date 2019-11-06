webpackHotUpdate("main",{

/***/ "./src/todo-page.js":
/*!**************************!*\
  !*** ./src/todo-page.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todopage; });
/* harmony import */ var _manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-page */ "./src/manager-page.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _q_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./q.jpg */ "./src/q.jpg");
/* harmony import */ var _q_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_q_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _r_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./r.jpg */ "./src/r.jpg");
/* harmony import */ var _r_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_r_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _t_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t.jpg */ "./src/t.jpg");
/* harmony import */ var _t_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_t_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _o_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./o.jpg */ "./src/o.jpg");
/* harmony import */ var _o_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_o_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _v_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./v.jpg */ "./src/v.jpg");
/* harmony import */ var _v_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_v_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/todo-page.js";











const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

class Todopage extends React.Component {
  constructor(props) {
    super(props);

    this.handelBackButton = () => {
      //to managerpage
      this.setState({
        redirectToManager: true
      });
    };

    this.state = {
      todo: '',
      year: '',
      month: '',
      Day: ''
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  render() {
    if (this.state.redirectToManager) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    } else {
      return React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        textAlign: "center",
        style: {
          height: '100vh'
        },
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        style: {
          maxWidth: 450
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Password",
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "teal",
        onClick: this.handleBackButton,
        fluid: true,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "save")))));
      /*return(
      <Form >
      	<div class= ' background-up '>
      		
      					<h1 class='main-font'>new todo</h1>
      						</div>
      						<div class= ' backgrounds element-font'>
      							<Grid columns={3}>
      	 		<Grid.Column verticalAlign='left'>
      	 		<br/>
       						<br/><br/><br/>
       						<br/>
       						<br/><br/><br/>
       						<br/>
       						<br/><br/><br/>
       						
      	 		
      						<Form.Field required >
      						
         		 		<label>New todo</label>
         						<Input  icon='tasks'
               					iconPosition='left'  placeholder='todo' value= {this.state.todo} onChange=
      					 		{this.handleTodoChange} />
       						</Form.Field>
       						<br/><br/>
       						<Form.Field>
         		 		<label>Year</label>
         						<Input  icon='calendar alternate'
               					iconPosition='left'  placeholder='year' 	value= {this.state.year} onChange=
      					 		{this.handleYearChange}  />
       						</Form.Field>
       						<br/><br/>
       						<Form.Field>
         		 		<label>Month</label>
         						<Input  icon='calendar alternate outline'
               					iconPosition='left'  placeholder='month' value= {this.state.month} onChange=
      					 		{this.handleMonthChange} />
       						</Form.Field>
       						<br/><br/> 
       				<Form.Field >
         		 		<label>Day</label>
         						<Input  icon='calendar'
               					iconPosition='left'  placeholder='day' value= {this.state.day} onChange=
      					 		{this.handleDayChange} />
      					 		<br/>
       						<br/><br/><br/>
       						<br/>
       						<br/><br/><br/>
      					 		<Grid columns={2}>
         						<Grid.Column verticalAlign='left'>
      					<Buttonn title="save"   onClick={this.handelBackButton} icons='save' Color = 'linkedin'/>
      					</Grid.Column>
      					<Grid.Column  verticalAlign='right'>
      					<Buttonn title="cancel"  onClick={this.handelBackButton} icons = 'cancel' Color = 'gray'/>
      					</Grid.Column>
      					</Grid>
       						</Form.Field> 
       						</Grid.Column>
       						<Grid.Column verticalAlign='right'>
       							<br/>
      	 		
      	 		<img class = 'img  ' textAlign='center' src= {t}/>
      	 		<img class = 'img  ' textAlign='left' src= {v}/>
      	 		<img class = 'img  ' textAlign='center' src= {q}/>
       						
       						</Grid.Column>
       						<Grid.Column verticalAlign='left'>
       						<br/>
       						<br/><br/><br/>
       						<br/>
       						<br/><br/><br/>
       						<img class = 'img  ' textAlign='right' src= {o}/>
       						<br/>
       						<br/><br/><br/>
       						<br/><br/><br/><br/>
       						<br/><br/><br/>
       						<img class = 'img  ' textAlign='right' src= {r}/>
       						</Grid.Column >
       						</Grid>
      			
      					</div>
      					
      		</Form >
      	
      )*/
    }
  }

  handleYearChange(e) {
    //setstate for change year	 	
    this.setState({
      year: e.target.value
    });
  }

  handleMonthChange(e) {
    //setstate for change month 	
    this.setState({
      month: e.target.value
    });
  }

  handleDayChange(e) {
    //setstate for change day
    this.setState({
      day: e.target.value
    });
  }

  handleTodoChange(e) {
    //setstate for change todo	
    this.setState({
      todo: e.target.value
    });
  }

}

/***/ })

})
//# sourceMappingURL=main.28af01c11ee2a6b6c581.hot-update.js.map