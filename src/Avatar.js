import avatar from './images/image-avatar.png';
import './avatar.css'

function Avatar(){
return(
<div className='MainFooter'>
    <div className='ChildFoot'>
        <div className='avatarSection'>
            <img src={avatar} title='avatar'/>
            <p>
                Creation of <span>
                    Jules Wyvern
                </span>
            </p>
        </div>
    </div>
</div>
)
}

export default Avatar;