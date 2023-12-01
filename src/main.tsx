import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import Dev from "./pages/Dev.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>

    <Dev />
  </BrowserRouter>,
)
