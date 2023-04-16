import style from './App.module.scss'
import Filter from "./components/Filter/Filter";
import Diagram from "./components/Diagram/Diagram"
import { Provider } from 'react-redux'
import {store} from './store/store'



function App() {
  return (
      <Provider store={store}>
        <div id={'pdfOutput'} className={style.window}>
            <Filter />
            <Diagram />
        </div>
      </Provider>
  )
}

export default App
