import {Route, Routes} from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favorite from './Pages/Favorites';
function App() {
  return (
    <>
    <Routes>
      
      <Route path='/' element={<AllMeetups/>}/>
      <Route path='/newMeetups' element={<NewMeetups/>}/>
      <Route path='/Favorites' element={<Favorite/>}/>

    </Routes>
    
    </>
  );
}

export default App;
