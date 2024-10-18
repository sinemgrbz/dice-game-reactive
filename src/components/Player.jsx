export default function Player ({img, imgAlt,name,onChange,readOnly,inputStyle})  {
    return (
        <>
        <div className="player">
          <input 
          type="text"
          value={name}
          onChange={onChange}
          readOnly={readOnly}
          placeholder="player"
          style={inputStyle}  />
          <img src={img} alt={imgAlt} />
        </div>
        </>
    )
}