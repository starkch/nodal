'use strict';

var HELLO_COMPONENT = "\nvar HelloMessage = React.createClass({\n  getInitialState: function() {\n    return {username: ''};\n  },\n\n  createUser: function() {\n    var unique = cuid();\n    var url = 'http://localhost:3000/v1/users/';\n    var postData = {\n      username: 'user_' + unique,\n      email: unique + '@domain.com',\n      password: 'password',\n    };\n\n    $.post(url, postData, function (data) {\n    	var id = data.data[0].id;\n        var user = 'visitor_'+id\n    	this.setState({username: user});\n      }.bind(this));\n\n  },\n\n  componentDidMount: function() {\n    this.createUser();\n\n  },\n\n  render: function() {\n    return <div>Hello {this.state.username}!</div>;\n  }\n});\n\nReactDOM.render(<HelloMessage />, mountNode);\n";

ReactDOM.render(React.createElement(ReactPlayground, { codeText: HELLO_COMPONENT }), document.getElementById('helloExample'));
