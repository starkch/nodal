'use strict';

var HELLO_COMPONENT = '\nvar HelloMessage = React.createClass({\n  render: function() {\n    return <div>Hello {this.props.name}</div>;\n  }\n});\n\nReactDOM.render(<HelloMessage name={currentUserDisplayName} />, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: HELLO_COMPONENT }), document.getElementById('helloExample'));

/*

Feed this to whatever inserts those new lines and creates that giant hello component string...


var HelloMessage = React.createClass({
  getInitialState: function() {
    return {username: ""};
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
        var user = "visitor_"+id
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
