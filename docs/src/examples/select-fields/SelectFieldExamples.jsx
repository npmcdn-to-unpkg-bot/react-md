import React, { PureComponent } from 'react';
import SelectField from 'react-md/lib/SelectFields';
import states from 'constants/states';

export default class SelectFieldExamples extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _handleChange = (item, event) => { // eslint-disable-line no-unused-vars
    this.setState({ value: item.abbreviation });
  };

  render() {
    return (
      <div>
        <SelectField
          label="Select a State"
          menuItems={states}
          itemLabel="name"
          position={SelectField.Positions.TOP_LEFT}
        />
        <SelectField
          floatingLabel
          label="State"
          menuItems={states}
          position={SelectField.Positions.TOP_RIGHT}
          value={this.state.value}
          onChange={this._handleChange}
          itemLabel="abbreviation"
        />
        <SelectField
          defaultValue={1}
          menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
        <SelectField
          label="Disabled"
          floatingLabel
          disabled
          defaultValue={1}
          menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
      </div>
    );
  }
}
