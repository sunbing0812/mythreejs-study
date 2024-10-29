
import { Navigate, Route, Routes, } from 'react-router-dom'
import Layout from '../pages/Layout'




const App = () => {


    return (
        <Routes>
            <Route path='/' element={<Navigate to="/homepage"  replace />} />
            <Route path='/*' element={<Layout />} />
        </Routes>
    )
}

export default App
