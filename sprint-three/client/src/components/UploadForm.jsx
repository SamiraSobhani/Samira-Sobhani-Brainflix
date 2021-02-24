import React from 'react'

function UploadForm() {
    return (
        <div className="form">
            <label className="form__title" htmlFor="form__addTitle" >TITLE YOUR VIDEO</label>
            <input className="form__addTitle" id="form__addTitle" type="text" placeholder="Add a title to your video"/>
            <label className="form__description">ADD A VIDEO DESCRIPTION</label>
            <textarea className="form__addDescription" type="text" placeholder="Add a description of your video"/>
        </div>
    )
}

export default UploadForm
