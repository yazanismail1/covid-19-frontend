import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import '../styles/Home.css';

class Home extends React.Component {
    state = {
        statistics: [],
        country_data: []
    }

    
    componentDidMount() {
        let data;
        axios
            .get("https://covid-task-app.herokuapp.com/covid-task-app.git/world_statistics")
            .then((res) => {
                data = res.data;

                this.setState({
                    statistics: data,
                });
            })
            .catch((err) => {});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            country: e.target.country_name.value,
            from_date: e.target.from_date.value,
            to_date: e.target.to_date.value,
        }
        let data;

        axios
            .get("https://covid-task-app.herokuapp.com/country_data?country_name="+obj["country"]+"&from_date="+obj["from_date"]+"T00:00:00Z&to_date="+obj["to_date"]+"T00:00:00Z")
            .then((res) => {
                data = res.data;
                console.log(data)
                
                this.setState({
                    country_data: data,
                });
            })
            .catch((err) => {});
    }
  
    render() {
      return (
        <>
            <Header />
            <div className='statistics-section'>
                <p><strong>Total Confirmed Cases</strong><br/>{this.state.statistics.TotalConfirmed}</p>
                <p><strong>Total Death Cases</strong><br/>{this.state.statistics.TotalDeaths}</p>
                <p><strong>Total Recovered Cases</strong><br/>{this.state.statistics.TotalRecovered}</p>
            </div>

            <div className='search-form'>
                <h3>Get statistics for a specific country</h3>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3 form-input" controlId="name">
                        <Form.Control id="country_name" type="text" placeholder="Enter Country Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-input" controlId="fromDate">
                        <Form.Control id="from_date" type="date"/>
                    </Form.Group>
                    <Form.Group className="mb-3 form-input" controlId="toDate">
                        <Form.Control id="to_date" type="date"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
            {this.state.country_data.length ? (
                <div className='wrapper'>
                    {this.state.country_data.map((item) => {
                        return (
                            <div className='country_cards'>
                                <p>Date: {item.Date}</p>
                                <p>Cases: {item.Cases}</p>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div class="no-data">
                    <h3>Submit the form to recieve data!</h3>
                </div>
            )}

        <Footer />
        </>

      );
    }
    }
    
export default Home;