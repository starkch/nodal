'use strict';

var HELLO_COMPONENT = '\nvar HelloMessage = React.createClass({\n  render: function() {\n    return <div>Hello {this.props.name}</div>;\n  }\n});\n\nReactDOM.render(<HelloMessage name={currentUserDisplayName} />, mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: HELLO_COMPONENT }), document.getElementById('helloExample'));
