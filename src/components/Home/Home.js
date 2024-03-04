
import '../Home/Home.css'
import ProgressBar from '../common/ProgressBar/ProgressBar'
import HeaderUi from '../common/HeaderUi/HeaderUi.js'
import Footer from '../Footer/Footer.js'
function Home() {
  return (
    <div className='HomeConatainer'>
      <HeaderUi/>
      <div className="EmpProdDashbaordContainer">
       <div className="EmpProdDashBoardText">
         Employee Productivity Dashboard
       </div>
      <ProgressBar range={"4"} text={"Productivity on Monday"}/>
      <ProgressBar range={"92"} text={"Productivity on Tuesday"}/>
      <ProgressBar range={"122"} text={"Productivity on Wednesday"}/>
      <ProgressBar range={"93"} text={"Productivity on Thursday"}/>
      <ProgressBar range={"89"} text={"Productivity on Friday"}/>
      <ProgressBar range={"98"} text={"Productivity on Saturday"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
