import "./write.css"

export const Write = () => {
  return (
    <div className="write">
        <img className="writeImg" src="https://c4.wallpaperflare.com/wallpaper/852/706/531/england-london-big-ben-travel-wallpaper-thumb.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileIput">
                <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileIput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story" type="text" className="writeInput writetext">

                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
        </div>
  )
}
