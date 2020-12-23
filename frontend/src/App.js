import { useSelector } from 'react-redux'
import { selectSettings } from './store/settings'

import Navbar   from './components/Navbar'
import LeftMenu from './components/LeftMenu'
import Carousel from './components/Carousel'
import Showcase from './components/Showcase'

function App(props) {

  const { shopName } = useSelector(selectSettings)

  return (
    <>
      <Navbar />
      <div className="container">

        <div className="row">

          <div className="col-lg-3">
            <h1 className="my-4">{shopName}</h1>
            <LeftMenu />
          </div>

          <div className="col-lg-9">
            <Carousel />
            <Showcase />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
