import avatar from './avatar.PNG';

export default function Comment( { datas }) {
    return (
    <div className="cm-body">
        <div className="cm-ibox">
            <img height='30px' width='30px' className="cm-img" alt="dp" src={datas.dp === ''?avatar:datas.dp}></img>
        </div>
        <div className="cm-sub">
            <span className='cm-user'>{datas.user}</span>
            <span className='cm-text'>{datas.text}</span>
            <span className='cm-state'>{datas.state}</span>
        </div>
    </div>
    )
}