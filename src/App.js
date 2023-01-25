import logo from './logo.svg';
import Form from './Containers/Form';
import BannerPromo from './Components/BannerPromo';
import Description from './Components/Description';
import "./Styles/app.scss"
import "./Styles/bannerPromo.scss"
import "./Styles/descrption.scss"
import "./Styles/form.scss"


function App() {
  return (
    <>
      <div className='principal-container'>
        <Description />

        <div className='section-container'>
          <BannerPromo />
          <Form />
        </div>

      </div>
    </>

  );
}

export default App;
