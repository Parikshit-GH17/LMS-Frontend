
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BroswerRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux';
import store from './Redux/store';


createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <BroswerRouter>
  <App />
  
  <Toaster/>
</BroswerRouter>
</Provider>
   
  
);