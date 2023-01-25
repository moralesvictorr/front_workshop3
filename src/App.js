import logo from './logo.svg';
import Form from './Containers/Form';
import BannerPromo from './Components/BannerPromo';
import Description from './Components/Description';
import "./Styles/app.scss"
import "./Styles/bannerPromo.scss"

function App() {
  return (
    <>

    <Description />
    <Form />
    <BannerPromo />
    </>

  );
}

export default App;
