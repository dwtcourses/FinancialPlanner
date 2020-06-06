import React from 'react';
import Sidebar from '../../Layout/Sidebar'
import './Details.css';
import {Button,Radio,Collapse,List,TextField, ListItem,FormControlLabel} from '@material-ui/core'
import {Redirect} from 'react-router-dom';

class Details extends React.Component{
    constructor(props){
        
        super(props);
        console.log(this.props)
        this.state = {
            assets: false,
            debts: false,
            email: false,
            assetsnew: true,
            emailnew: true,
            debtsnew: true,
            assetname: '',
            assetvalue: '',
            debtname: '',
            debtvalue: '',
            newEmail: '',
            oldEmail: ''
        }
    }
    handleAssetsChange = () => {
        this.setState((prevState) => ({
            assets : !prevState.assets
        }))
    }
    handleDebtChange = () => {
        this.setState((prevState) => ({
            debts : !prevState.debts
        }))
    }
    handleEmailChange = () => {
        this.setState((prevState) => ({
            email : !prevState.email
        }))
    }
    handleAssetsDropdown = (main,arr) => {
        // let arr = ["Name of Asset","Value of Asset"]
        let data = []
        arr.forEach(element => {
            data.push(
                <ListItem className = "Details_Page_List_Item">
            <TextField className = "space" id="standard-basic" label={element} />
            </ListItem>
            )
        });
        return data
    }
    handleNewAsset = (val) => {
        this.setState({assetsnew: val})
    }
    handleNewDebt = (val) => {
        this.setState({debtsnew: val})
    }
    handleNewEmail = (val) => {
        this.setState({emailnew: val})
    }
    handleSubmit = () => {
        if(this.state.assets === true){
            if(this.state.assetname === '' || this.state.assetvalue === ''){
                alert("Please enter asset details")
            }
            // fetch('localhost:4000/assets')
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }
    render(){
        if(this.props.status === "NOT_LOGGED_IN"){
            return(
                <Redirect to = "/404" />
            )
        }
        else{
            console.log(this.props.status)
        return(
            <div className = "Details_Page">
            <Sidebar />
            <div className = "Details_Page_Main_Content">
                <div className = "Details_Page_Heading">
                    Details Updation
                </div>
                <div className = "Details_Page_Radio_Buttons_Layout">
                <div className = "Details_Page_Radio_Buttons_Column">
                    <div className = "Details_Page_Radio_Buttons_Column_Heading">
                    <div className = "Details_Page_SubHeading">
                        Assets
                    </div>
                    <div className = "Details_Page_Radio_Button">
                    <Radio
                        checked={this.state.assets}
                        onClick={this.handleAssetsChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        size = "small"
                    />
                    </div>
                    </div>
                    
                    <div className = "Details_Page_Input_Fields">
                    <Collapse in={this.state.assets} timeout="auto" unmountOnExit className = "Details_Page_Collapse">
                    <FormControlLabel 
                    checked={!this.state.assetsnew} 
                    onClick = {() => {
                        this.handleNewAsset(false)
                    }} 
                    control={<Radio color="primary" size = "small" />} 
                    label="Existing" />
                    <FormControlLabel
                     checked={this.state.assetsnew} 
                     onClick = {() => {
                        this.handleNewAsset(true)
                    }} 
                     control={<Radio color="primary" size="small" />} 
                     label="New" />
                    <List component="div" disablePadding className = "Details_Page_List">
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label="Name of Asset" name = "assetname" value = {this.state.assetname} onChange = {this.handleChange} />
                    </ListItem>
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label= "Value of Asset" name = "assetvalue" value = {this.state.assetvalue} />
                    </ListItem>
                    </List>
                    </Collapse>
                    </div>
                </div> 

                <div className = "Details_Page_Radio_Buttons_Column">
                    <div className = "Details_Page_Radio_Buttons_Column_Heading">
                    <div className = "Details_Page_SubHeading">
                        Debts
                    </div>
                    <div className = "Details_Page_Radio_Button">
                    <Radio
                        checked={this.state.debts}
                        onClick={this.handleDebtChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        size = "small"
                    />
                    </div>
                    </div>
                    <div className = "Details_Page_Input_Fields">
                    <Collapse in={this.state.debts} timeout="auto" unmountOnExit className = "Details_Page_Collapse">
                    <FormControlLabel 
                    checked={!this.state.debtsnew} 
                    onClick = {() => {
                        this.handleNewDebt(false)
                    }} 
                    control={<Radio color="primary" size = "small" />} 
                    label="Existing" />
                    <FormControlLabel
                     checked={this.state.debtsnew} 
                     onClick = {() => {
                        this.handleNewDebt(true)
                    }} 
                     control={<Radio color="primary" size="small" />} 
                     label="New" />
                     <List component="div" disablePadding className = "Details_Page_List">
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label="Name of Debt" name = "debtname" value = {this.state.debtname} />
                    </ListItem>
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label= "Value of Debt" name = "debtvalue" value = {this.state.debtvalue} />
                    </ListItem>
                    </List>
                    </Collapse>
                    </div>
                </div>

                <div className = "Details_Page_Radio_Buttons_Column">
                    <div className = "Details_Page_Radio_Buttons_Column_Heading">
                    <div className = "Details_Page_SubHeading">
                        Email
                    </div>
                    <div className = "Details_Page_Radio_Button">
                    <Radio
                        checked={this.state.email}
                        onClick={this.handleEmailChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        size = "small"
                    />
                    </div>
                    </div>
                    <div className = "Details_Page_Input_Fields">
                    <Collapse in={this.state.email} timeout="auto" unmountOnExit className = "Details_Page_Collapse">
                    <FormControlLabel 
                    checked={!this.state.emailnew} 
                    onClick = {() => {
                        this.handleNewEmail(false)
                    }} 
                    control={<Radio color="primary" size = "small" />} 
                    label="Existing" />
                    <FormControlLabel
                     checked={this.state.emailnew} 
                     onClick = {() => {
                        this.handleNewEmail(true)
                    }} 
                     control={<Radio color="primary" size="small" />} 
                     label="New" />
                     <List component="div" disablePadding className = "Details_Page_List">
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label="New Email" name = "newEmail" value = {this.state.newEmail}/>
                    </ListItem>
                    <ListItem className = "Details_Page_List_Item">
                    <TextField className = "space" id="standard-basic" label= "Old Email" name = "oldEmail" value = {this.state.oldEmail}/>
                    </ListItem>
                    </List>
                    </Collapse>
                    </div>
                </div>           
                </div>
                <div className = "Details_Page_Submit">
                <Button 
                color="secondary"
                onClick = {this.handleSubmit}>
                Submit
                </Button>
                </div>
            </div>
            </div>
        )
    }
}
}

export default Details;