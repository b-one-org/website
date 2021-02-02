import Navbar from './Navbar'

const Container = (props) =>{
    return (
        <div>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </div>
    )
    
}

export default Container