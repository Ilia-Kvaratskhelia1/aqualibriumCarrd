
import cristal from './images/image-equilibrium.jpg'
import './cristal.css'
import hoverImg from './images/icon-view.svg'

function Cr(){
    return (
        <div className='mainImageCont'>
            <img  src={cristal} title="cristal"/>
            <img className='viewImg'  src={hoverImg} title="cristal"/>
        </div>


    )
}

export default Cr;