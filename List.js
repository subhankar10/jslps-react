import React, {Component} from 'react';
import '../App.css';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import {GetDistrictsList} from '../webservice/Districtservice';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default class List extends Component{
  componentDidMount () {
     GetDistrictsList().then((result) => {
       const districtList = result;
       console.log(districtList);

       let districtOptions = districtList.map(function(row,index){
           return {'value': row.district_id, 'label': row.district_name}

           });
       this.setState({districtOptions: districtOptions});
     });

   }

  render(){
    return(
      <form>
      <div id="box1">
      <p>District</p>
      <Select
      options={this.setState.districtOptions}
      formatGroupLabel={formatGroupLabel}
      /></div>
      <div id="box2">
      <p>Block</p>
      <Select


    formatGroupLabel={formatGroupLabel}
      /></div>
      <div id="box3">
      <p>Panchayat</p>
      <Select


        formatGroupLabel={formatGroupLabel}
      /></div>
      <div id="box4">
      <p>Village</p>
      <Select


        formatGroupLabel={formatGroupLabel}
      /></div>
      <Button variant="contained" color="primary" id="butt">
            submit
          </Button>
      </form>
    );
  }
}
