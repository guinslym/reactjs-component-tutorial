import React, {Component} from 'react';

export class LibrarySelect extends Component{
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(e){
    const name = e.target.value;
    console.log("Name Selected: " + name);
    this.props.onChange(name);
  }


  render(){
    return(
      <div>
          <h1 className="text-center">{this.props.title}</h1>
          <div className="row">
            <div className="form-group">
              <label htmlFor="sel1">Select list:</label>
              <select className="form-control" id="sel1" onChange={this.handleSelect}>
                  {this.props.libraries.map((library, i) =>
                    <option key={i} value={library.name}>
                      {library.Name}
                    </option>
                    )}
               </select>
            </div>
            
          </div>
      </div>

    );
  }
}
