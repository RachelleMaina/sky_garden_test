import React, { Component } from "react";
import axios from "../axios";
import Home from "../Components/Home";

class HomeView extends Component {
  state = {
    data: [],
    error: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .post("", {
        filter: "offer_benefit_type eq 'Percentage'",
        select:
          "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value",
      })
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { data, error } = this.state;
    return <Home data={data} error={error} />;
  }
}

export default HomeView;
