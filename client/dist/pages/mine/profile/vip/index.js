"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gift = "/pages/mine/profile/vip/assets/gift.png";
var right = "/pages/mine/profile/vip/assets/right.png";

var Vip = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Vip, _BaseComponent);

  function Vip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Vip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vip.__proto__ || Object.getPrototypeOf(Vip)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "gift", "right", "x"], _this.state = {
      x: 0
    }, _this.timer = null, _this.count = 0, _this.animate = function () {
      /**
       * // NOTE 由于 Taro.createAnimation 还不支持 RN，目前只能自己实现
       * 核心要点都是通过 state + style 实现
       * 如下是随手写的很粗糙的动画，见笑了
       */
      _this.timer = setTimeout(function () {
        if (_this.state.x === 0 || _this.state.x === -15) {
          _this.count += 1;
        }
        _this.setState({ x: _this.state.x + (_this.count % 2 ? -1 : 1) });
        if (_this.count <= 6) {
          _this.animate();
        }
      }, 20);
    }, _this.getAnimateStyle = function () {
      return { transform: "translateX(" + _index2.default.pxTransform(_this.state.x) + ")" };
      /**
       * // NOTE 样式文件中的 transform 属性能正确编译为 RN 支持的格式，但在 js 中目前需要自行处理
       * 这边主要注意 RN 的 transform 写法与一般 css 是不同的
       **/
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Vip, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Vip.prototype.__proto__ || Object.getPrototypeOf(Vip.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var anonymousState__temp = (0, _index.internal_inline_style)(this.getAnimateStyle());
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        gift: gift,
        right: right
      });
      return this.__state;
    }
  }]);

  return Vip;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/mine/profile/vip/index", _temp2);
exports.default = Vip;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Vip));