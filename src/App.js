import "./App.css";

function App() {
  return (
    <div class="bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 section1">
            <div class="col-12 mt-4 mb-2">
              <div class="col-12 col-md-1 d-flex flex-row justify-content-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-logo-img.png"
                  class="img"
                  alt="img1"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="iconscard d-flex flex-row justify-content-center">
                <div class="iconscontainer d-flex flex-column justify-content-center">
                  <i class="fab fa-google icon"></i>
                </div>
                <div class="iconscontainer d-flex flex-column justify-content-center">
                  <i class="fab fa-twitter icon"></i>
                </div>
                <div class="iconscontainer d-flex flex-column justify-content-center">
                  <i class="fab fa-instagram icon"></i>
                </div>
                <div class="iconscontainer d-flex flex-column justify-content-center">
                  <i class="fab fa-linkedin icon"></i>
                </div>
              </div>
            </div>
            <div class="addsection text-center">
              37, Ayur Vigyan Nagar, New Delhi, INDIA.
            </div>
          </div>

          <div class="col-5 col-md-3 mt-4 mb-4">
            <div class="section2">
              <h1 class="cardheading1">Contact Us</h1>
              <div class="d-flex flex-row mb-2">
                <i class="fas fa-envelope icon1"></i>
                <p class="cardpara1">vr@gmail.com</p>
              </div>
              <div class="d-flex flex-row mb-2">
                <i class="fas fa-phone-alt icon1"></i>
                <p class="cardpara1">1234506789</p>
              </div>
              <div class="d-flex flex-row">
                <i class="fab fa-skype icon1"></i>
                <p class="cardpara1">Rahul</p>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-3 ml-4 mt-4 mb-4">
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
