const Editor = (props) => {
    return(
      <div id="editor-wrapper" class="center">
        <div id="editor-heading">
          <span>Editor</span>
        </div>
        <textarea 
          id="editor"
          onChange={props.onChange}
          type="text"
          value={props.markdown}
        />
      </div>
    );
  };
  
  const Preview = (props) => {
    return(
      <div id="preview-wrapper" class="center">
        <div id="preview-heading">
          <span>Preview</span>
        </div>
        <div id="preview">
          <ReactMarkdown>{props.markdown}</ReactMarkdown>
        </div>
      </div>
    )
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markdown: temp
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
      this.setState({
        markdown: event.target.value
      });
    }
    render() {
     return (
      <div class="flex-container">
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
      </div>
     )
    }
  }
  
  const temp = `# Heading 1 
  ## Heading 2
  ### Heading 3
  # Link example
  [YouTube](https://www.youtube.com/)
  # Code example
  \`\`\`
  function void sayHello() {
      console.log("Hello");
  }
  \`\`\`
  # Typing cases
  **BOLD**
  
  _Italic_
  > Block Quotes!
  
  # Lists
  1. Item 1
  1. Item 2
  1. Item 3
  
  ## Bullet List
    -Bullet 1
    -Bullet 2
      -Subbullet 1
      -Subbullet 2
    -Bullet 3
  # Inline Code
  \`<div><h1>Heading</h1></div>\`
  
  # Image
  
  ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
  
  
  `;
  
  ReactDOM.render(<App />, document.getElementById("root"));