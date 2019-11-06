(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 5s linear;\n  height: 20vmin;\n  pointer-events: none;\n   animation-name: heartBeat;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n}\n@keyframes heartBeat {\n  0% {\n    transform: scale(1);\n  }\n\n  14% {\n    transform: scale(1.3);\n  }\n\n  28% {\n    transform: scale(1);\n  }\n\n  42% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n}\n\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n.App-link {\n  color: #61dafb;\n}\n.main-font{\n\tcolor:teal;\n   font-family:Algerian;\n   font-size: 70px;\n   animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);\n   }\n\n\n.element-font{\n\tcolor:#005c99;\n   font-family:snap itc;\n   font-size: 20px;\n   }\n.background-up{\n\ttext-align: center; \n   background-color:lightgray;\n   border:4px solid #4d4d4d;\n}\n.colors{\n\tcolor:#ff4d4d;\n}\n.backgrounds{\n\tbackground-color: #99ccff;\n\tborder:2px solid #000099;\n\t\n}\n#label{ color:#005c99;\n   font-family:snap itc;}\n.img{\n\t@border:5px solid #000080;\n\tfilter: contrast(150%);\n\tborder-radius: 50%;\n\tanimation-name: bounce;\n\t\n}\n.button {\n  background-color: #f4511e;\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  font-size: 16px;\n  margin: 4px 2px;\n  opacity: 1;\n  transition: 0.3s;\n\n}\n.button:hover {opacity: 0.6}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/a.jpg":
/*!*******************!*\
  !*** ./src/a.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/a.6e405aef.jpg";

/***/ }),

/***/ "./src/aaa.png":
/*!*********************!*\
  !*** ./src/aaa.png ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA21BMVEX///8AlYcAdmsAlojMz88zqp8Ajn8AdGkAkYLV5+UAcWX2+/vKzc0AkYP7+/sAeG0AfXEopZnS1dXy8/Pw+PclopYVnI8AiXwAg3fe4OD39/fU0tORz8nt7u7V2Ng5raPX7+yAr6qk2NO33dleubCByMHN6Obi8O+ww8GStbFxq6Xk5+drwrpLtKu23dia0Mo+pJmqy8dZoZm10M0ui4K6w8Npp6BGkYhYmJBon5d2oZ14xb5Cp5tstq3N6+jC3tyKurV1urKQxb9WqKA/m5Gv0M2NsK1jq6OdvbpUlgBYAAAOFElEQVR4nO1dCVfaTBcuTGTJAgGSsAiEPWFXBKWiBVu0/v9f9M0korglM7kTSN+P55yeKurcPNx1tsuPHyeccMIJJ5xwwgknnHDCCf8GJKvdqnZHnfHYNM0z/G887oy61Vbbyhz70YCQNK3R6o7Pcg7O3uPlxXG31dM06diPGgCa1Wi75M684dKc9Czt2I/MAqvnsnuvMX0f77WKv3FYHvvB6WC1p6vx6+MTYgYBwojtQL5xXiVUX39zPJq2I09Sa1c75usz6w6zmBccpvrrX5idbjvK5mphertndbTmSW6fJua5Y2l2qo1jE/kG7dGOnm7QcnvH09B3JEftY5P5DKm1M07dCMBuhx3JnNmSopQsJeuFXw5Eb0fSHcqcWpFJk43p2H2oQMb5Gcj1ydx42jg2NQeNaSfnqo8PP5ejo8hIcNRa/Pntc+y0jpw82iOe5vmRpGOsR42r1srJD6Hwczk6gXV1rEJHap2RN1kPiZ4Lkj1yZ62jRFXLcUA9LP3tgFx3PLwatQnJgDl4+vMHccecOTlwxGl0Qwswn+GGnG7jkATbHWh5xganmOscMKhWzTAj6FdwoqpZPRA/ieTA3CH5ETiWOjpITG2QEBNuivgaOgk4jfAJts0DhdDPIGo0w3ZGPA08QA78Dgir0Qw3+2vTYxJ8oTgNMTNKVRJDj8aPgMTUanha7B7NBfcoYmfshkVwFQGCLsVVeASP54JvCIui1I0IQXe60eXuiyTIRISgS7HKOaJK0wgRdClO+WoRJ/oIEXQomi2eBNtcCCqphIuUwoUixwKuYcLThJJA4+5knbbS68lqjBIp4Hg4ovIrwyU4wRQa9fY2IjJSb4SAHHF1Y/JyxRG0VEN3X/lM6wJm+Jhihw/BKpAgupt+M/L0DsQRU+Qy68dRBjTfNVaNb8e2VqD3TucSbRodGEHdc+NBa13AKHa+f/sooXVheSK39hHQywFGxzmjC61tJrAwajR8JTRA4+fOgInfMkFRJuVPEFOE5H/jzAQt+EudHGjNokclpQeQgPRcB5IVWzmQE9LG8iqEYi4HsFMLlAmVDm0Q0DqA+gZnxeB2uspBEoVBn6vaEGfXc4Fn/G0TYqPKA30c1x4A0QblguZ9bQSKozqL2DbIWM5GwZJiC1TMpO5ZQpx0D5lpBEyKjQ4ojhrfldtfYwoxFxSseJvC5oQXbDIboPrUyLG9n67IMWzdgnXq1oEIQ7lxg5WgBFRhjHXlvQuShpXIWtlYY9gWE2L1/RZMnD5mTPsZqAqNX4wMfwHlsdZukgncJTRYM5QGXArSGZelWtDFNYPVLSSoQEYlgo8iGIwEf/yALsjqJou0CXgB+PAMjRxLmTiCLJ648g5tpbh2G9FLa5hgcQbrnM2Ci2RY5a+eQaXFkN8a20es4Ts/9OvDWge+W49YC8UpnKFOvajQNjlsFQ4YGQ7gIhH1TLjK4dSasmQLNdISvqcY0ynN1OJgpLHYnM0R13MOMg3Kw9LtMx772cUNE8NNiYNMWjOdcjkbW1yy5AtrWeQgE9EtLFgjLueeFPWSgeGlysENsZmOaN7WHo9IiqHO6JVozVQuMpFJs48w4XR0rZikV+JlkoeREjOlcEQNti37BkUtpSkJpkt8jBSbKcV2ojXmdTKoKM7oagxtJhY5CUUUixkNbofUFVXcUDHciLxUiKf6DV9xvNwQSytmRRpXvBSzvFSIzXTiJ07qcjy+Vopn/SleqnEe2f4Fhu+xTI2bGxKocXXjLVHa4N/hKBGN/XxfA8/u98Up8Xj22sv3retsPK7wfFNzfgx7XA9yE4rJ+eN3N+szV/MkZ4Ixwy/nw5aePwEl1GxSnKW/emO19EyMZ9UEZ4l+i4orzudkkaJm46I4WH9oHyBZ60GSEOSrQSzQb8t7zFceoVjCribGbzZX67TTTEjS0uurzU1WxE5a4k0wFhv7MOQZaFygWEKNY3cUs/PloNnv95uD5TwrYgeMl4ox/kerc94E4auWXwAphCPWZDIpEiSTzndqkVcl8w4+a9GNsI6rJ4itYmIEzhelREiSkHdlOglJLIFSLKkOQ7UUjvZe4D2BakEPmHsBvSFEKSnvdFENk+FhoHgvKa7+fYYp74QIOUIXESjeW1DjMEPAYaB4p3z4ptPxcebJkH9Jc3h4FzXH6CTAG7onw+Nf84XDu2z77zOM0i3KoPjvM0T/5wzD8cMURuIjyIuhSDt0pEHI0M3Oajr51bBeOiJLmtX4NZl2O6bu18A1CA7HMIX0u86q9ctrAVP61ep27nQU46hOb4ag09Z7SCnG3UOVsiuw1p4+/DG42ezFARgq6O73pEHFbofG5PcYevf5Bd4M/3CQkDIeGOm9kGw/GDw4/vGUcg0eP2V0e0GvdWq9KgeOPz1l3AIFKIkRqDeuZK2gvQhST54SnmHDp2AXOh1YY+AzPHsOvwatYkLuOu4Bdr874X3czAIwRPcNLgRxzLkH1AEJbzMqBB/Z+M2vJ44GuehV8By6EnhkNOHZEUeaBNaiUfEe+iYoQd7d/tpBKd74DBw0XfBvZxiQYqrpM64djKHvKZYACLZLlLJ9hq0HGpZzVyoX0jTQs9R9hk0HCTX34XRqtu4DPIvhd1ywtmQf9IKuOQQ7enfsD7Os+QxaeWJ2ROarFfRgv4SRevJJFj8yNuuYsbvw+olq7Eq0fT/444rZEbl2hvsA5nhqXPmOWZ4xjulzugMI1q2iWdl3yEKfbchEmCrESmScCmy8q1KCyjObd3uvv8LB+DTPfoEGhxphyzKkz54yHCOmXemtQPEJQ0OmW2Q+80042ObkgyHFkGyOyHwrnRVst9j7/m6IHdFmMFPF99AxmCHL4Ymt7e+G2BHLf+mHTPHv5/sBUpehyPpbpvqgr9oT/ZCJMKZN78GSL578ilIXFZneTBNhFd1v6NEz3Mo0RorBYKYJ2qtNwZGmZ3jtX9C4GNJX39FiaNMZKTbTOrWZRorhtk5ppNhMqSeJUWKYeqI1UhxNBdpqMEoMkUBrpBj523+PYeo2zzDqcEGpxAgxRAuamnSHjExZfkeI4UBm+uDSMmXCiA5Dw6aPMwQVSiVGh+GAtp7ZoUw3w4gMwy2jCvEskU6JkWE4kGlmhvvI0CkxKgyxCpk/ILl2TqNEhalLaRBI9zQz4ME5Q7Z/Qaa8oFAiUv1XYGG4UilS83bBrkKixL7/2EhVw7XTtErBEPXr7CokSpT9l79RSbwJ80NQrRux5M9wJgdRIQ6neYq0r2STntfRYbCuk1kKN7TzrIH0BeXzpu8sChXj8dAoWtfxuH9DiVTznKUi3UcmT7Fig0rxJEOvHRZYs2Scwka3cj6QjRLUBJvCzUtxkbGxFx3Wc5GmYwayWeaFH1GXm/4iYqVsUr3kvTKsXWaTWZqWIE3Z72yCFyr5BcV2IrlxLw74Zo30QCS39f2FzxZ5xpL7PYYCVfFGKM4v+XmjdTmnJLi1haBhxgVOihR5P6YUs/GkOnvkU8JJj9fZZDxbpOi3gPoBU+EbCnmZ6mS0osYdjhwIPs7m8XicrrHStVwPmArfUBMoF/mLTiOBGyjHxxunIwFdd7OtDLRRB2VBptrCc1t8JEX1wQpqN5n0g0oaZtB2PDFkgXXe+6XYOk1WjLktPsj7L4rz37sLQPSQNOv3NikSO1ApG4LgTFgHOqGLQl6g3BZGsaLT/iIpitvNOk19al+y0usNppd0GmZQNzzpC0Hr0Y/Artikk+lwxIrEkVVMzmeby6ue5V0KaFbv6nIzmxN6+O9UhoYuTRlSzLzHUKBdPyUcSYcPt1mLKKrz5aD/fPm4xhrVXi1X0jSstfXj5XN/sLwpOexIOxfSEYT6dMmAS5R5QQZHG/rbNIhcLCEkncfGNPGjz29ulsvlzx3w1zfzOf4d0QksxLLdhif0p2f+8okyrxTrgsx4JUpJuD7paJP45ke8/ixJfC/BRI9MegVoqn+PCjtFB4ldT5rvgFUX5IrHH1mg3yykQ6EuCAEous1olGKxWCqV1Dfg7/BrSixgs5o/ggCvZb6gGEiLb0Q/I+hw2ET5E3TSIkO4CRM4yPBKhJ8pcuicDsYgLIIuxeax+ZFEHxZBlyLNdDFE4AlhiAQdioJ9zO4ghi2EStDJi7TzxTCA54Pc8+AnimVM8fo4loquMcFyyARxATfEFPvHUOMWu6Aw5FqqfYMacUbWOwtwzLAL8psu+VCsy8KieVhLRc2FIAfaQwuESlkWZHt7uO51qa2NJYbvgm8gznjI7I+z/IFc8A1krnFuzw5hqmhmn4cxl/ADnvcfJqg6IZTzdJcSNaLGRTNcjtvBgijwYCHmPSrDPDHVQXgctwNioPnhAUPMBxQcU7UH4bijMbAdAz24B+4jU8vLLkfuqQM5/OR87Rge+A5DgTyIfMuVYwrdymRYjkuiEBB3xHja8jJWtH1yRsxHg98Pkjkcjuf2NY+gs/1Lwgvmd5QM8R0qw7rDcfH0F0Zy+/dp4fCrHzGAfo3KcKfI/mAWbBkAbQd9+/ychJdy5PgRZAovihTs581syxR5FGTMNs+2TNQn54fHj5/foVIrk8iKsbDt/sxANI30UshYPj3bC+fvZKFci6L63pDJ4GLOJSnIi4XdXOrouyaX+HWkL2+fFwtZfqFXr1Uiq749ZGplYR+y/XT7c3ahGwZpdYkQ/l+/mP28fbLld79Xjq5xfgHsk/n828Pnzz9j/8f5+vCotVlAFIbl8jueHyE73OrlYeFfUt4HVAq1ISGKmTpUZdfl8g6z8nBYK0Q7rtAiUykUCrV9FAqVfyKmnHDCCSeccMIJJ0QD/wNNuHdC4C+GtgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/b.jpg":
/*!*******************!*\
  !*** ./src/b.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/b.58bb00b9.jpg";

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buttonn; });
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/button.js";


const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class Buttonn extends React.Component {
  render() {
    //created button
    return React.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      animated: "fade",
      onClick: this.props.onClick,
      color: this.props.Color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"].Content, {
      visible: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.title), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"].Content, {
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, " ", React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
      name: this.props.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }))));
  }

}

/***/ }),

/***/ "./src/c.jpg":
/*!*******************!*\
  !*** ./src/c.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/c.ee74578a.jpg";

/***/ }),

/***/ "./src/first-page.js":
/*!***************************!*\
  !*** ./src/first-page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Firstpage; });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page */ "./src/login-page.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-page */ "./src/signup-page.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i.jpg */ "./src/i.jpg");
/* harmony import */ var _i_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _w_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./w.jpg */ "./src/w.jpg");
/* harmony import */ var _w_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_w_jpg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/first-page.js";









const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

class Firstpage extends React.Component {
  constructor() {
    super();

    this.handleLoginButton = () => {
      //to loginpage
      this.setState({
        redirectToLogin: true
      });
    };

    this.handleSignupButton = () => {
      //to signuppage
      this.setState({
        redirectToSignup: true
      });
    };

    this.state = {};
  }

  render() {
    if (this.state.redirectToLogin) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        push: true,
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    } else if (this.state.redirectToSignup) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        push: true,
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    } else {
      return React.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, React.createElement("div", {
        class: " background-up ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, React.createElement("h1", {
        class: "main-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Welcome!")), React.createElement("div", {
        class: " backgrounds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, React.createElement("img", {
        class: "img",
        textAlign: "right",
        src: _w_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, React.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), React.createElement(_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: "login",
        onClick: this.handleLoginButton,
        icons: "sign-in",
        Color: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), React.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), React.createElement(_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: "sign up",
        onClick: this.handleSignupButton,
        icons: "signup",
        Color: "gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))))));
    }
  }

}

/***/ }),

/***/ "./src/g.jpg":
/*!*******************!*\
  !*** ./src/g.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/g.33e38e19.jpg";

/***/ }),

/***/ "./src/i.jpg":
/*!*******************!*\
  !*** ./src/i.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-page */ "./src/first-page.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-page */ "./src/todo-page.js");
/* harmony import */ var _manager_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager-page */ "./src/manager-page.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page */ "./src/login-page.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-page */ "./src/signup-page.js");
/* harmony import */ var _my_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-sidebar */ "./src/my-sidebar.js");
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/index.js";









const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"); //import './index.css';
//import App from './App';


class Index extends React.Component {
  //call first page
  render() {
    return React.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, React.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _first_page__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), React.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/login",
      component: _login_page__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), React.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/signup",
      component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), React.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/add-todo",
      component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), React.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/manager",
      component: _manager_page__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

}

ReactDOM.render(React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, React.createElement(_my_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
  content: React.createElement(Index, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ "./src/list-todo.js":
/*!**************************!*\
  !*** ./src/list-todo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listtodo; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-page */ "./src/todo-page.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/list-todo.js";







const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

class Listtodo extends React.Component {
  constructor(props) {
    super(props);

    this.handlenewTodoButton = () => {
      //to todopage
      this.setState({
        redirectToTodo: true
      });
    };

    this.state = {
      name_todo: '',
      year: 0,
      month: 0,
      day: 0,
      todo: ["todo1", "todo2", "todo3"]
    };
    this.Notification = this.Notification.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  render() {
    if (this.state.redirectToTodo) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
        push: true,
        to: "/add-todo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    } else {
      const Menus = [{
        key: 'Edit',
        text: 'Edit',
        value: 'Edit',
        onClick: this.handlenewTodoButton
      }, {
        key: 'Delete',
        text: 'Delete',
        value: this.state.name_todo,
        onClick: this.handleDeleteButton
      }];
      const activeItem = this.state.activeItem;
      const todos = this.state.todo;
      const listItems = todos.map(todo => React.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        columns: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, React.createElement("input", {
        type: "checkbox",
        onChange: this.checkIt,
        disable: "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        verticalAlign: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        text: todo,
        pointing: "left",
        className: "link item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
        onClick: this.handlenewTodoButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Edit"), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
        onClick: this.handleDeleteButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Delete"), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.Notification()))))))));
      return React.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, listItems);
    }
  }

  Notification(e) {
    //for time notification	
    return this.state.year == 0 && this.state.month == 0 && this.state.day == 0 ? React.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "no time ") : React.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, this.state.year, "/", this.state.month, "/", this.state.day);
    e.preventDefault();
  }

  checkIt(el) {
    //action for checkbox	
    el.checked ? el.disabled = false : el.disabled = true;
  }

  handleDeleteButton(e) {
    //to delete
    this.setState({
      name_todo: e.target.value
    });
  }

}

/***/ }),

/***/ "./src/login-page.js":
/*!***************************!*\
  !*** ./src/login-page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loginpage; });
/* harmony import */ var _manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-page */ "./src/manager-page.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var _a_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a.jpg */ "./src/a.jpg");
/* harmony import */ var _a_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_a_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _aaa_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aaa.png */ "./src/aaa.png");
/* harmony import */ var _aaa_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aaa_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/login-page.js";








const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

class Loginpage extends React.Component {
  constructor(props) {
    super(props);

    this.handleManagerButton = () => {
      //to managerpage
      this.setState({
        redirectToManager: true
      });
    };

    this.handleSignup = () => {
      //to signuppage
      this.setState({
        redirectToSignup: true
      });
    };

    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    //form
    if (this.state.redirectToManager) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    } else if (this.state.redirectToSignup) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
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
          lineNumber: 37
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
        style: {
          maxWidth: 450
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        src: _aaa_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 46
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "teal",
        onClick: this.handleManagerButton,
        fluid: true,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Login"))), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "New to us? ", React.createElement("a", {
        href: "./signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Sign Up"))));
      /*return( 
      	<Form>
      		 
        <div class='background-up'>
        <br/><br/><br/><br/>
      		<h1 class = 'main-font '>Login</h1>
      		
      		<div class = 'element-font backgrounds'>
      		<Grid columns={2}>
         				
         				
         				<Grid.Column verticalAlign='center'> 
         	<br/><br/><br/><br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <Form.Input
               icon='user'
               iconPosition='left'
               label='Username'
               placeholder='Username'
             />
             <br/><br/><br/><br/>
             <Form.Input
               icon='lock'
               iconPosition='left'
               label='Password'
               type='password'
               placeholder='password'
             />
            
             <br/>
             <br/>
             <br/>
             
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <Grid columns={2}>
         				<Grid.Column>
         					<Buttonn title="login"  onClick={this.handleManagerButton} icons='sign-in' Color='linkedin'/>
         				</Grid.Column>
      				
         				<Grid.Column verticalAlign='right'>
         				<Buttonn title="cancel"  onClick={this.handleFirstButton }icons = 'cancel'Color='gray'/>
         				</Grid.Column>
      					</Grid>
      					
      					</Grid.Column>
      					<Grid.Column>
      					<br/><br/>
      					<img  class='img' src = {a}/>
      					<br/><br/>
      					</Grid.Column>
         				</Grid>
         				</div>
         				</div>
      			 </Form>*/
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

}

/***/ }),

/***/ "./src/manager-page.js":
/*!*****************************!*\
  !*** ./src/manager-page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Managerpage; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _list_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-todo */ "./src/list-todo.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-page */ "./src/todo-page.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page */ "./src/login-page.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-page */ "./src/first-page.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _b_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./b.jpg */ "./src/b.jpg");
/* harmony import */ var _b_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_b_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _c_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./c.jpg */ "./src/c.jpg");
/* harmony import */ var _c_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_c_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _g_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./g.jpg */ "./src/g.jpg");
/* harmony import */ var _g_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_g_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/manager-page.js";












const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

class Managerpage extends React.Component {
  constructor(props) {
    super(props);

    this.handlenewTodoButton = () => {
      //to todopage
      this.setState({
        redirectToTodo: true
      });
    };

    this.handleLogoutButton = () => {
      //to firstpage
      this.setState({
        redirectToFirst: true
      });
    };

    this.state = {
      username: "username",
      gender: "male",
      year: 0,
      month: 0,
      day: 0,
      todo: ["todo1", "todo2", "todo3"]
    };
    this.profile = this.profile.bind(this);
  }

  render() {
    if (this.state.redirectToTodo) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
        push: true,
        to: "/add-todo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    } else if (this.state.redirectToFirst) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
        push: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      });
    } else {
      return React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: 3,
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, React.createElement("h1", {
        class: "main-font App-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Hi ", this.state.username, "!")), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        verticalAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.profile()))), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        textAlign: "center",
        style: {
          height: '100vh'
        },
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        style: {
          maxWidth: 450
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, React.createElement(_list_todo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "teal",
        onClick: this.handlenewTodoButton,
        fluid: true,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "new todo"))));
      /*return(
      	<div >
      		<Form >
      			<div class='background-up'>
         					{this.profile()}
      				<h1 class='main-font App-logo' >Hi {this.state.username}!</h1>
      		
      			</div>
         				<div class='backgrounds' >
      				<Grid columns={2}>
      	 				<Grid.Column verticalAlign='right'>
      	 		<br/>
      		<br/>
      		<br/>
      		<br/>	<br/>
      		<br/>
      		<br/>		
      		<Listtodo/>
      		
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/>
      		<br/><br/>
      		<Grid columns={2}>
         					
      	 		<Grid.Column verticalAlign='left'>
      	 	<Buttonn title="new todo"  onClick={this.handlenewTodoButton} icons='tasks' Color='linkedin'/>
      	 	</Grid.Column>
         				<Grid.Column verticalAlign='left' >
      	 	<Buttonn title="log out"  onClick={this.handleLogoutButton}icons='logout'Color='gray'/>
      	
         				</Grid.Column>
         				</Grid>
      		</Grid.Column>
      		<Grid.Column>
      			<br/>
      			<img class = 'img  ' textAlign='right' src= {g}/>
      			<br/><br/>
      		</Grid.Column>
      		</Grid>
      	
      		
         				</div >
        </Form>
      	</div>
      );*/
    }
  }

  profile() {
    //import image
    return React.createElement("img", {
      verticalAlign: "right",
      src: this.state.gender == "Female" ? _b_jpg__WEBPACK_IMPORTED_MODULE_8___default.a : _c_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: this.state.gender == "Female" ? "female" : "male",
      width: "200",
      height: "150",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/my-sidebar.js":
/*!***************************!*\
  !*** ./src/my-sidebar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-page */ "./src/first-page.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-page */ "./src/todo-page.js");
/* harmony import */ var _manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager-page */ "./src/manager-page.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page */ "./src/login-page.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-page */ "./src/signup-page.js");
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/my-sidebar.js";









class MySidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleManagerButton = () => {
      //to managerpage
      this.setState({
        redirectToManager: true
      });
    };

    this.handleFirstButton = () => {
      //to firstpage
      this.setState({
        redirectToFirst: true
      });
    };

    this.handleLoginButton = () => {
      //to loginpage
      this.setState({
        redirectToLogin: true
      });
    };

    this.handleSignupButton = () => {
      //to Signuppage
      this.setState({
        redirectToSignup: true
      });
    };

    this.handlenewTodoButton = () => {
      //to todopage
      this.setState({
        redirectToTodo: true
      });
    };

    this.handleMenuButton = () => {
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    };

    this.state = {
      menuVisible: false
    };
  }

  render() {
    if (this.state.redirectToLogin) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    } else if (this.state.redirectToSignup) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    } else if (this.state.redirectToManager) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    } else if (this.state.redirectToTodo) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/add-todo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    } else if (this.state.redirectToFirst) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pushable, {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"],
        animation: "push",
        icon: "labeled",
        inverted: true,
        vertical: true,
        visible: this.state.menuVisible,
        width: "thin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: this.handleLoginButton,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: this.handleSignupButton,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: this.handleManagerButton,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "numbered list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), "Manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: this.handlenewTodoButton,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), "Todo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        onClick: this.handleFirstButton,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "sign out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), "Log out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pusher, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        icon: "sidebar",
        onClick: this.handleMenuButton,
        color: "teal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), this.props.content)));
    }
  }

}

/***/ }),

/***/ "./src/o.jpg":
/*!*******************!*\
  !*** ./src/o.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/o.649d9b43.jpg";

/***/ }),

/***/ "./src/q.jpg":
/*!*******************!*\
  !*** ./src/q.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/q.3ecbf6f2.jpg";

/***/ }),

/***/ "./src/r.jpg":
/*!*******************!*\
  !*** ./src/r.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/r.e8393350.jpg";

/***/ }),

/***/ "./src/signup-page.js":
/*!****************************!*\
  !*** ./src/signup-page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signuppage; });
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page */ "./src/login-page.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/button.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var _jsxFileName = "/home/kosar/Projects/WebDev/Todo_Man/front/src/signup-page.js";





const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

const gender = [{
  key: 'male',
  value: 'male',
  text: 'Male'
}, {
  key: 'female',
  value: 'female',
  text: 'Female'
}];
class Signuppage extends React.Component {
  constructor(props) {
    super(props);

    this.handleManagerButton = () => {
      //to managerpage
      this.setState({
        redirectToManager: true
      });
    };

    this.handleFirstButton = () => {
      //to firstpage
      this.setState({
        redirectToFirst: true
      });
    };

    this.state = {
      username: ''
    };
  }

  render() {
    if (this.state.redirectToManager) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/manager",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    } else if (this.state.redirectToFirst) {
      return React.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        push: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    } else {
      return React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        textAlign: "center",
        style: {
          height: '100vh'
        },
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        style: {
          maxWidth: 450
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Password",
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Confirm Password",
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        placeholder: "gender",
        options: gender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        label: "I agree to the Terms and Conditions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), React.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "teal",
        onClick: this.handleManagerButton,
        fluid: true,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Sign up")))))
      /*return(
      	<Form >
      	<div class='background-up '>
      		
      				<h1 class='main-font'>sign up</h1>
      				</div>
      				<div class='backgrounds element-font'>
      				<Grid columns={3} >
         				<Grid.Column>
         				</Grid.Column>
         				
         				<Grid.Column verticalAlign='center'>
      				 		<Form.Field required >
      				 			<br/><br/>
         						<label>username</label>
         						<Input  icon='user'
               					iconPosition='left'  placeholder='username' />
       						</Form.Field>
       						<br/><br/> 
       				 		<Form.Field required>
         						<label>password</label>
         						<Input icon='lock'
               					iconPosition='left' placeholder='password' />
       						</Form.Field>
       						<br/><br/>
       						<Form.Field required>
         						<label>confirm password</label>
         						<Input  placeholder='confirm password' icon='lock'
              						iconPosition='left' />
       						</Form.Field>
       						<br/><br/>
       						<Form.Field required>
       							<label>gender</label>
       							<Select  placeholder='gender' options={gender} />
       						</Form.Field>
       						<br/><br/>
       						<Form.Field required>
         						<Checkbox label='I agree to the Terms and Conditions' />
       						</Form.Field>
       						<br/>
       						<Grid columns={2}>
         						<Grid.Column verticalAlign='left'>
      					<Buttonn title="sign up"  onClick={this.handleLoginButton} icons ='signup'Color= 'linkedin'/>
      					</Grid.Column>
      					<Grid.Column  verticalAlign='right'>
      					<Buttonn title="cancel"  onClick={this.handleFirstButton} icons = 'cancel'Color='gray'/>
      					<br/><br/>
      					</Grid.Column>
      					</Grid>
      					</Grid.Column>
      					</Grid>
      					</div>
      		</Form>*/
      ;
    }
  }

}

/***/ }),

/***/ "./src/t.jpg":
/*!*******************!*\
  !*** ./src/t.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/t.e8ae4150.jpg";

/***/ }),

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

/***/ }),

/***/ "./src/v.jpg":
/*!*******************!*\
  !*** ./src/v.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/v.a06e5bf6.jpg";

/***/ }),

/***/ "./src/w.jpg":
/*!*******************!*\
  !*** ./src/w.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/w.1593712e.jpg";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kosar/Projects/WebDev/Todo_Man/front/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/kosar/Projects/WebDev/Todo_Man/front/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map