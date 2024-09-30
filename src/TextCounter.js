

export default function TextCounter( { classname, value, limit }) {
    if ( value <= 0 ) {
        return (
            <div className="counterBox"></div>
        );
    }
    return (
        <div className='counterBox'>
        <span className={classname}> { value }/{ limit }</span>
        </div>
    )
}