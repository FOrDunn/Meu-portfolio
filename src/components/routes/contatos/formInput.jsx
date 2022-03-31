function Forminput({content, ...props}) {
    return (
        <label><p className="inputLabels">{content}</p>
            <input {...props} className="formInput" required/>
        </label>
    );
}
export default Forminput;