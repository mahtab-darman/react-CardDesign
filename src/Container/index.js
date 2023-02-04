import './style.css'
import Header from '../Header/index';
import Items from '../Items';
import Actions from '../Actions/index';



function Container(){
    return (
        <section className="container">
            <Header/>
            <Items/>
            <Actions/>
        </section>
    )
}
export default Container