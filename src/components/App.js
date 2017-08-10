import  React from 'react';
import {LibrarySelect} from '../components/LibrarySelect';
import Branches from '../data/branches.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      BranchInfo: Branches.BranchesInfo.BranchInfo,
      libraryName: 'Orleans'
      };
      this.changeLibraryName = this.changeLibraryName.bind(this);
  }

  changeLibraryName(newName){
    this.setState({
      libraryName: newName
    })
  }

  render() {
    return (
      <div className="container">

          <LibrarySelect
            libraries={this.state.BranchInfo}
            title={this.state.libraryName}
            onChange={this.changeLibraryName}
          />

      </div>
    );
  }
}


export default App;
