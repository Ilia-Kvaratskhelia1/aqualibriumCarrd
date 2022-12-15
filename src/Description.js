

import './description.css';
import etheriumImage from './images/icon-ethereum.svg';
import ClockIcon from './images/icon-clock.svg';
function Description(){
    return(
        <div className='mainTextArea'>
            <div className='childCont'>
            <h3>Equilibrium #3429</h3>
            <p className='ds'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='costArea'>

                <div className='etherium'>
                    <img src={etheriumImage} title="etherium"/>
                <p >
                    0.041ETH
                </p>
                </div>
                <div className='clock'>
                    <img  src={ClockIcon} title="clock" />
                <p>
                    3 days left
                </p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Description;