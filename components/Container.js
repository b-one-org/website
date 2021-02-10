import Footer from './Footer'
import Navbar from './Navbar'


const Container = (props) =>{
    return (
        <div>
            <Navbar/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
    
}

export default Container