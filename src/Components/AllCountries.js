import React from 'react';
import axios from 'axios';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import '../styles/MyRecord.css'
import swal from 'sweetalert';
import ReactLoading from "react-loading";
import Footer from './Footer';

class AllCountries extends React.Component {
    state = {
        allCountries: [],
    }

    componentDidMount() {
        let data;
        axios
            .get("https://covid-task-app.herokuapp.com/all_countries")
            .then((res) => {
                data = res.data;
                console.log(data)
                this.setState({
                    allCountries: data,
                });
            })
            .catch((err) => {});
    }

    handleAdd = (item) => {
        axios
            .post("https://covid-task-app.herokuapp.com/save_country/",{
                "Country": item.Country,
                "TotalConfirmed": item.TotalConfirmed,
                "TotalDeaths": item.TotalDeaths,
                "TotalRecovered": item.TotalRecovered,
                "Date": item.Date,
            })
            .then((res) => { })
            .catch((err) => {});
            swal({
                title: "Great!",
                text: "Added Successfully",
                icon: "success",
                button: "Yes",
              });
    } 

    render() {
      return (
        <>
            <Header />
            {this.state.allCountries.length ? (
                <div className='myrecord-wrapper'>
                    {this.state.allCountries.map((item) => {
                        return (
                            <div className='myrecord_country_cards'>
                                <h3>{item.Country}</h3>
                                <p>Cases: {item.TotalConfirmed}</p>
                                <p>Deaths: {item.TotalDeaths}</p>
                                <p>Recovered: {item.TotalRecovered}</p>
                                <p>Date: {item.Date}</p>
                                <Button variant="outline-dark" onClick={() => this.handleAdd(item)}>Add Record</Button>

                            </div>
                        )
                    })}
                </div>
            ) : (
                <div class="no-data">
                    <ReactLoading type="spin" color="#5c86a6" 
                    height={100} width={60} />
                </div>
            )}
        <Footer />
        </>

      );
    }
    }
    
export default AllCountries;