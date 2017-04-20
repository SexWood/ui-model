(function(window, undefined) {
  if (!window) {
    return;
  }
  var UrlQuery = {};
  UrlQuery.getQueryString = function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var result = window.location.search.substr(1).match(reg);
    if (result!=null) {
        return result[2];
    } else {
        return null;
    };
  }
// UMD export
  if (typeof module !== 'undefined' && module.exports && window.module !== module) {
    module.exports = UrlQuery;
  } else if (typeof define === 'function' && define.amd) {
    console.log('define')
    define('UrlQuery', [], UrlQuery);
  } else {
    console.log('window')
    window.MyUrlMethods = {}
    window.MyUrlMethods.UrlQuery = UrlQuery;
  }

}(typeof window !== 'undefined' ? window : global));
