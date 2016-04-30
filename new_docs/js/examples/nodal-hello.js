'use strict';

var HELLO_COMPONENT = "\nvar HelloMessage = React.createClass({\n  getInitialState: function() {\n    return {username: ''};\n  },\n\n  componentDidMount: function() {\n\n    this.serverRequest = $.get(this.props.source, function (result) {\n      var lastUser = result.data[result.data.length - 1];\n      var nextUserId = lastUser ? lastUser.id + 1 : 1;\n      var nextUserName = 'user_' + nextUserId;\n\n      var postData = {\n        username: nextUserName,\n        email: nextUserName + '@domain.com',\n        password: nextUserName + 'r0x'\n      }\n\n      $.post(this.props.source, postData, function(result){\n        this.setState({username: result.data[0].username});\n      }.bind(this))\n      .fail(function(jqXHR, textStatus, errorThrown){\n        console.error(jqXHR.responseText);\n\n      })\n\n    }.bind(this));\n\n  },\n\n  componentWillUnmount: function() {\n    this.serverRequest.abort();\n  },\n\n  render: function() {\n    return <div>Hello {this.state.username}!</div>;\n  }\n});\n\nReactDOM.render(<HelloMessage source='http://localhost:3000/v1/users/' />, mountNode);\n";


ReactDOM.render(React.createElement(ReactPlayground, { codeText: HELLO_COMPONENT }), document.getElementById('helloExample'));


//sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\\n/g' string-nodal-hello.js | sed -e "s/.*/\"\\\n&\\\n\"/" > nodal-hello-string.js
/*
For now, feed these commented readable Nodal example versions to that insane sed one liner up there... Jesus. Also that one liner has to be // commented or else

Then paste the string into the var EXAMPLE_COMPONENT

Hah. Totally insane. Fix this for later. Or do it once, and hide it. Or something. Jesus.


var HelloMessage = React.createClass({
  getInitialState: function() {
    return {username: ''};
  },

  componentDidMount: function() {

    this.serverRequest = $.get(this.props.source, function (result) {
      var lastUser = result.data[result.data.length - 1];
      var nextUserId = lastUser ? lastUser.id + 1 : 1;
      var nextUserName = 'user_' + nextUserId;

      var postData = {
        username: nextUserName,
        email: nextUserName + '@domain.com',
        password: nextUserName + 'r0x'
      }

      $.post(this.props.source, postData, function(result){
        this.setState({username: result.data[0].username});
      }.bind(this))
      .fail(function(jqXHR, textStatus, errorThrown){
        console.error(jqXHR.responseText);

      })

    }.bind(this));

  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return <div>Hello {this.state.username}!</div>;
  }
});

ReactDOM.render(<HelloMessage source='http://localhost:3000/v1/users/' />, mountNode);

*/
