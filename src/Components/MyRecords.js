import React from 'react';
import axios from 'axios';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import '../styles/MyRecord.css';
import swal from 'sweetalert';

class MyRecords extends React.Component {
    state = {
        myRecords: []
    }

    componentDidMount() {
        let data;
        axios
            .get("http://127.0.0.1:8000/save_country")
            .then((res) => {
                data = res.data;
                console.log(data)
                this.setState({
                    myRecords: data,
                });
            })
            .catch((err) => {});
    }

    handleDelete = (pk) => {
        axios
            .delete("http://127.0.0.1:8000/save_country/"+pk)
            .then(this.componentDidMount())
            .catch((err) => {});
            swal({
                title: "Removed!",
                text: "Removed Successfully",
                icon: "success",
                button: "Yes",
              });
        this.componentDidMount()
    } 

    render() {
      return (
        <>
            <Header />
            {this.state.myRecords.length ? (
                <div className='myrecord-wrapper'>
                    {this.state.myRecords.map((item) => {
                        return (
                            <div className='myrecord_country_cards'>
                                <h3>{item.Country}</h3>
                                <p>Cases: {item.TotalConfirmed}</p>
                                <p>Deaths: {item.TotalDeaths}</p>
                                <p>Recovered: {item.TotalRecovered}</p>
                                <Button variant="outline-danger" onClick={() => this.handleDelete(item.pk)}>Delete Record</Button>

                            </div>
                        )
                    })}
                </div>
            ) : (
                <div class="no-data">
                    <h3>No Available Records ¯\_(ツ)_/¯</h3>
                </div>
            )}
        
        </>

      );
    }
    }
    
export default MyRecords;