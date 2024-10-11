export default function Loader( { box, loaderStatus, errorMessage } ) {
    return (
        <div className={ box }>
            <div className={ loaderStatus }>
            </div>
            <div className="errLoading">{ errorMessage }</div>
        </div>
    )
}