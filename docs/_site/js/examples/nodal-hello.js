'use strict';

var HELLO_COMPONENT = "\nvar HelloMessage = React.createClass({\n  getInitialState: function() {\n    return {username: ''};\n  },\n\n  createUser: function() {\n    var unique = cuid();\n    var url = 'http://localhost:3000/v1/users/';\n    var postData = {\n      username: 'user_' + unique,\n      email: unique + '@domain.com',\n      password: 'password',\n    };\n\n    $.post(url, postData, function (data) {\n    	var id = data.data[0].id;\n        var user = 'visitor_'+id\n    	this.setState({username: user});\n      }.bind(this));\n\n  },\n\n  componentDidMount: function() {\n    this.createUser();\n\n  },\n\n  render: function() {\n    return <div>Hello {this.state.username}!</div>;\n  }\n});\n\nReactDOM.render(<HelloMessage />, mountNode);\n";



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

  createUser: function() {
    var unique = cuid();
    var url = 'http://localhost:3000/v1/users/';
    var postData = {
      username: 'user_' + unique,
      email: unique + '@domain.com',
      password: 'password',
    };

    $.post(url, postData, function (data) {
    	var id = data.data[0].id;
        var user = 'visitor_'+id
    	this.setState({username: user});
      }.bind(this));

  },

  componentDidMount: function() {
    this.createUser();

  },

  render: function() {
    return <div>Hello {this.state.username}!</div>;
  }
});

ReactDOM.render(<HelloMessage />, mountNode);
*/
