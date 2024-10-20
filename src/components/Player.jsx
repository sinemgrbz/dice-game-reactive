export default function Player ({playerX,playerName,img, imgAlt,showButton,editName })  {



    return (
        <>
        <div className="player-container">
          <div className="playername-container">
            <p className={playerName}>{playerX}</p>
            {showButton && <button onClick={editName}><i className="fa-regular fa-pen-to-square"></i></button>} 
          </div>
          <div className='player'>
            <img src={img} alt={imgAlt} style={{width:'100px'}}/>
          </div>
        </div>
        </>
    )
}