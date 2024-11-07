
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CategoryProvider } from './Component/Common/FeaturedCard/FeaturedCard.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <CategoryProvider>
            <App />
        </CategoryProvider>
    </BrowserRouter>
  
)
