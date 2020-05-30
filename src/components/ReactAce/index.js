
import React, { Component } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";

class ReactAce extends Component {


  render() {
    return (
      <div className="App">
        <AceEditor
          ref="aceEditor"
          mode="text"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default ReactAce;
