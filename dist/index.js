function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var $ = _interopDefault(require('jquery'));

var styles = {"pane":"_19OqE","navbar":"_31s4L","paneContent":"_24V_p"};

var TabbedPaneComponent = function TabbedPaneComponent(_ref) {
  var data = _ref.data;
  $(function () {
    if (data !== undefined) {
      console.log('data.contents.length: ' + data.contents.length);
      $('#navbarDiv').empty();
      for (var i = 0; i < data.contents.length; i++) {
        var newDiv = $('<div class=' + styles.navbar + '></div>');
        var newAnchor = $('<a class="paneLink"></a>').text(data.contents[i].subject).attr('data-text', data.contents[i].text);
        newDiv.append(newAnchor);
        newAnchor.click(function () {
          $('#paneContentDiv').html($(this).data('text'));
        });
        $('#navbarDiv').append(newDiv);
      }
      if (data.contents.length > 0) {
        $('.paneLink:first').click();
      }
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "pane",
    className: styles.pane
  }, /*#__PURE__*/React.createElement("div", {
    id: "navbarDiv"
  }), /*#__PURE__*/React.createElement("div", {
    id: "paneContentDiv",
    className: styles.paneContent
  }));
};

module.exports = TabbedPaneComponent;
//# sourceMappingURL=index.js.map
