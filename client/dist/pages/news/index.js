"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCH_BAR_MORE_IMAGE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _base = require("../../bases/base.js");

var _base2 = _interopRequireDefault(_base);

var _index3 = require("../../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEARCH_BAR_MORE_IMAGE = exports.SEARCH_BAR_MORE_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAlklEQVQoz8WRsQ6CMBRFD5X4S4Z/kTK5QjARWJyJ8gtO8jGELyJhAAeeSdOUIpNnvD19vekLouh0BBpAAxPQAkXX9SMODP8MBOLfNvwnEJt+KGFquJkUuOLmYfmp+PmKX8tM0x+UNLHRrKN3+okjuyj+hGL5c5vWc+f9Y+Y7e4VAwbJ0DczyaOkZVErh74q2/Ao4WP79A14CJJ7qixoSAAAAAElFTkSuQmCC';

var Shop = (_temp2 = _class = function (_AtBase) {
  _inherits(Shop, _AtBase);

  function Shop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Shop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shop.__proto__ || Object.getPrototypeOf(Shop)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray2", "isFirst", "data", "params", "showMore", "banner", "floors", "pageNumber"], _this.config = {
      navigationBarTitleText: ''
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Shop, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Shop.prototype.__proto__ || Object.getPrototypeOf(Shop.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isFirst: true,
        params: {},
        showMore: false,
        banner: [],
        floors: [],
        pageNumber: 1,
        data: []
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params, venderId, scene, sceneParams;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = (this.$router || this.context.$router).params;
                venderId = params.venderId || '1';
                scene = decodeURIComponent(params.scene);

                if (scene) {
                  sceneParams = this.queryStringToJson(scene);

                  if (sceneParams.venderId) {
                    venderId = sceneParams.venderId;
                  }
                }
                _context.next = 6;
                return this.getShopData(venderId);

              case 6:
                _index2.default.setNavigationBarColor({
                  frontColor: '#ffffff',
                  backgroundColor: '#000000',
                  animation: {
                    duration: 400,
                    timingFunc: 'easeIn'
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
    //上拉刷新 

  }, {
    key: "requestData",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var number;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                number = this.state.pageNumber;
                // if(!this.setState.hasMore){
                //   Taro.showToast({
                //     title: '没有数据了',
                //     icon: 'error',
                //     duration: 2000
                //           })
                //           return;
                // }

                console.log("pageNumber", number + 1);
                this.setState({
                  pageNumber: number + 1
                });
                this.getShopData();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestData() {
        return _ref3.apply(this, arguments);
      }

      return requestData;
    }()
  }, {
    key: "getShopData",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(venderId) {
        var that, res, afterData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _index2.default.setNavigationBarTitle({
                  // title: afterData.title
                  title: "ACQUIT-资讯"
                });
                // const res = await Taro.cloud.callFunction({
                //   name: 'news',
                //   data: {
                //     $url: 'getNews',

                //   }
                // })
                // // 成功调用
                // if (this.successCode(res)) {
                //   const afterData = this.getDataContent(res)
                //   console.log("getNews",afterData);
                //   const arryData = afterData.data;
                //   this.setState({
                //     params: {
                //       venderId
                //     },
                //     data:arryData,
                //     showMore: false,
                //     isFirst: false,
                //     ...afterData
                //   })
                //   Taro.setNavigationBarTitle({
                //     // title: afterData.title
                //     title: "ACQUIT-资讯"
                //   })
                //   console.log('.....data',this.state.data);
                //   // Taro.redirectTo(`/pages/detail/index?skuId=1`)

                // } else {
                //   // TODO: 异常处理
                //   console.log('.....')
                // }

                that = this;
                _context3.next = 4;
                return _index2.default.cloud.callFunction({
                  name: "fenyeRequest",
                  data: {
                    dbName: "News",
                    pageIndex: this.pageNumber,
                    pageSize: 10
                    // isGetNews:true
                  }

                });

              case 4:
                res = _context3.sent;

                if (this.successCode(res)) {
                  afterData = this.getDataContent(res);

                  console.log("getNews", res.hasMore);
                  // const arryData = afterData;
                  that.setState({
                    params: {
                      venderId: venderId
                    },
                    data: afterData,
                    hasMore: res.hasMore,
                    isFirst: false
                    // ...afterData
                  });

                  console.log('.....data', that.state.data);
                  // Taro.redirectTo(`/pages/detail/index?skuId=1`)
                } else {
                  // TODO: 异常处理
                  console.log('.....');
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getShopData(_x) {
        return _ref4.apply(this, arguments);
      }

      return getShopData;
    }()
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}

    // this.onGotoDetail(1)
    // console.log('jumpUrl2')


    // 搜索框显示更多

  }, {
    key: "toggleShowMore",
    value: function toggleShowMore() {
      //由于 this.setState 异步的缘故，可以通过给 this.setState 传入函数来确保拿到正确的值
      this.setState(function (prevState) {
        return { showMore: !prevState.showMore };
      });
    }

    // more里的联系客服

  }, {
    key: "connectService",
    value: function connectService() {
      _index2.default.makePhoneCall({
        phoneNumber: '000000000000' //仅为示例，并非真实的电话号码
      });
    }
  }, {
    key: "onGotoPage",
    value: function onGotoPage(page) {
      this.jumpUrl("/pages/" + page + "/index");
      console.log(page, "page");
    }
  }, {
    key: "onGotoDetail",
    value: function onGotoDetail(url) {
      console.log(url, "url");
      this.jumpUrl("/pages/news/detail/index?url=" + url);
      _index2.default.setStorageSync('newsURL', url);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          isFirst = _state.isFirst,
          data = _state.data,
          floors = _state.floors,
          showMore = _state.showMore;

      // console.log("banner", banner);


      var isIphonex = (0, _index3.getSystemInfo)().isIpx;
      var anonymousState__temp = !isFirst ? (0, _index.internal_inline_style)(isIphonex ? 'padding-bottom: 164rpx;' : '') : null;
      var loopArray2 = !isFirst ? data.map(function (item, floorIndex) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        console.log("goods", floorIndex, item.$original);
        return {
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray2: loopArray2
      });
      return this.__state;
    }
  }]);

  return Shop;
}(_base2.default), _class.$$events = ["requestData", "onGotoDetail"], _class.$$componentPath = "pages/news/index", _temp2);
exports.default = Shop;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Shop, true));