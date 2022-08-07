import "./App.css";

function App() {
  return (
    <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 section1">
            <div className="col-12 mt-4 mb-2">
              <div className="col-12 col-md-1 d-flex flex-row justify-content-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-logo-img.png"
                  className="img"
                  alt="img1"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="iconscard d-flex flex-row justify-content-center">
                <div className="iconscontainer d-flex flex-column justify-content-center">
                  <i className="fab fa-google icon"></i>
                </div>
                <div className="iconscontainer d-flex flex-column justify-content-center">
                  <i className="fab fa-twitter icon"></i>
                </div>
                <div className="iconscontainer d-flex flex-column justify-content-center">
                  <i className="fab fa-instagram icon"></i>
                </div>
                <div className="iconscontainer d-flex flex-column justify-content-center">
                  <i className="fab fa-linkedin icon"></i>
                </div>
              </div>
            </div>
            <div className="addsection text-center">
              37, Ayur Vigyan Nagar, New Delhi, INDIA.
            </div>
          </div>

          <div className="col-5 col-md-3 mt-4 mb-4">
            <div className="section2">
              <h1 className="cardheading1">Contact Us</h1>
              <div className="d-flex flex-row mb-2">
                <i className="fas fa-envelope icon1"></i>
                <p className="cardpara1">vr@gmail.com</p>
              </div>
              <div className="d-flex flex-row mb-2">
                <i className="fas fa-phone-alt icon1"></i>
                <p className="cardpara1">1234506789</p>
              </div>
              <div className="d-flex flex-row">
                <i className="fab fa-skype icon1"></i>
                <p className="cardpara1">Rahul</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 ml-4 mt-4 mb-4">
            <div class="section3">
              <h1 class="cardheading1">Let Us Help You</h1>
              <p class="cardpara2">100% Purchase</p>
              <p class="cardpara2">Protection</p>
              <p class="cardpara2">Your Account</p>
              <p class="cardpara2">Return Centre</p>
              <p class="cardpara2">Help</p>
            </div>
          </div>

          <div class="col-12">
            <div class="sectionfotter">
              <hr class="line1" />
              <div class="d-flex flex-row justify-content-center">
                <i class="far fa-copyright icon2"></i>
                <h1 class="cardheading2 text-center">
                  2020 by Rahul. Created with Bootstrap.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
