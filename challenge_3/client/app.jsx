class App extends React.Component {
  constructor(props) {
    super (props);

    this.state = ({
      currentPage: 'home',
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: '',
      creditCard: '',
      expirationDate: '',
      cvv: '',
      billingZip: '',
      // checkoutInfo: [],

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

    })

    this.handleButton = this.handleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : (this.state[event.target.name] = event.target.value)
    })
  }

  handleButton(event) {
    event.preventDefault();
    if(this.state.currentPage === 'home') {
      this.setState({
        currentPage: 'a'
      });
    } else if (this.state.currentPage === 'a') {
      this.setState({
        currentPage: 'b'
      })
    } else if (this.state.currentPage === 'b') {
      this.setState({
        currentPage: 'c'
      })
    } else if (this.state.currentPage === 'c') {
      this.setState({
        currentPage: 'd'
      })
    } else if (this.state.currentPage === 'd') {
      this.setState({
        currentPage: 'home'
      })
    }
  }

  collectInfo() {
    let value = {}
    for (let key in value) {
      value[key] = this.state[key];
    }
    console.log(value)
  }

  // postInfo() {
  //   // POST
    
    
  //   this.setState({
  //   })
  // }

  render() {
    let page;
    let navButton;
    if (this.state.currentPage === 'home') {
      page = 
      <div>
        <p>Welcome to Checkout</p>
        <button onClick={this.handleButton} > Click to begin! </button>
      </div>
    };
    if (this.state.currentPage === 'a') {
      page = 
      <div>
        <form>
          Name: <input onChange={this.handleChange} name="name" type="text" value={this.state.name} /> <br/>
          Email: <input onChange={this.handleChange} name="email" type="text" value={this.state.email} /> <br/>
          Password <input onChange={this.handleChange} name="password" type="text" value={this.state.password} /> <br/>
          <button onClick={this.handleButton} >Create Account </button>
        </form>
      </div>
    }
    if (this.state.currentPage === 'b') {
      page =
      <div>
        <form>
          Address Line 1: <input onChange={this.handleChange} name="addressLine1" type="text" value={this.state.addressLine1} /> <br/>
          Address Line 2: <input onChange={this.handleChange} name="addressLine2" type="text" value={this.state.addressLine2} /> <br/>
          City: <input onChange={this.handleChange} name="city" type="text" value={this.state.city} /> <br/>
          State: <input onChange={this.handleChange} name="state" type="text" value={this.state.state} /> <br/>
          Zipcode: <input onChange={this.handleChange} name="zip" type="text" value={this.state.zip} /> <br/>
          Phone Number: <input onChange={this.handleChange} name="phoneNumber" type="text" value={this.state.phoneNumber} /> <br/>
          <button onClick={this.handleButton} >Submit Shipping Info </button>
        </form>
      </div>
    }
    if (this.state.currentPage === 'c') {
      page =
      <div>
        <form>
          Credit Card: <input onChange={this.handleChange} name="creditCard" type="text" value={this.state.creditCard} /> <br/>
          CVV: <input onChange={this.handleChange} name="cvv" type="text" value={this.state.cvv} /> <br/>
          Billing Zipcode: <input onChange={this.handleChange} name="billingZip" type="text" value={this.state.billingZip} /> <br/>
          <button onClick={this.handleButton}>Submit Billing Info </button>
  
        </form>
      </div>
    }
    if (this.state.currentPage === 'd') {
      page = 
      <div>
        {/* // show all collected info */}
        <button onClick={this.handleButton}>Checkout! </button>
      </div>
    }

    return (
      <div> 
        {page}
        {navButton}
      </div>
    )
  }
}




ReactDOM.render(<App/>, document.getElementById('app'))

