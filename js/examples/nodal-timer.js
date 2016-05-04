'use strict';

var TIMER_COMPONENT = "\n\nvar Timer = React.createClass({\n  getInitialState: function() {\n    return {secondsElapsed: 0};\n  },\n  tick: function() {\n    this.setState({secondsElapsed: this.state.secondsElapsed + 1});\n  },\n  componentDidMount: function() {\n    //validate the current token if possible\n    var postData = {\n      username : 'user_134',\n      grant_type : 'password',\n      password : 'user_134r0x'\n    };\n\n   //if current token doesn't exist, login and request a new one\n\n   this.serverRequest = $.post(this.props.url, postData,function(result){\n     console.log(result.data);\n     clearInterval(this.interval);\n     this.interval = setInterval(this.tick, 1000);\n     }.bind(this));\n\n  },\n  componentWillUnmount: function() {\n    this.serverRequest.abort();\n    clearInterval(this.interval);\n  },\n  render: function() {\n    return (\n      <div>Seconds Since Login: {this.state.secondsElapsed}</div>\n    );\n  }\n});\n\nReactDOM.render(<Timer url='http://localhost:3000/v1/access_tokens/'/>, mountNode);\n";



ReactDOM.render(React.createElement(ReactPlayground, { codeText: TIMER_COMPONENT }), document.getElementById('timerExample'));


//sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\\n/g' string-nodal-hello.js | sed -e "s/.*/\"\\\n&\\\n\"/" > nodal-hello-string.js
/*
For now, feed these commented readable Nodal example versions to that insane sed one liner up there... Jesus. Also that one liner has to be // commented or else

Then paste the string into the var EXAMPLE_COMPONENT

Hah. Totally insane. Fix this for later. Or do it once, and hide it. Or something. Jesus.

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    //validate the current token if possible
    var postData = {
      username : 'user_134',
      grant_type : 'password',
      password : 'user_134r0x'
    };

   //if current token doesn't exist, login and request a new one

   this.serverRequest = $.post(this.props.url, postData,function(result){
     console.log(result.data);
     clearInterval(this.interval);
     this.interval = setInterval(this.tick, 1000);
     }.bind(this));

  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Since Login: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDOM.render(<Timer url='http://localhost:3000/v1/access_tokens/'/>, mountNode);

*/
