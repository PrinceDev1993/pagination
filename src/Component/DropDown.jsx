import React, {useState} from 'react'

const DropDown = () => {
    const [text, setText] = useState('')

    console.log(text);
    const changeFun =(e)=> {
        setText(e.target.value)
    }
    return (
        <div>
            <select name="" id="" onChange={changeFun}>
                <option value="" disabled='disabled' selected='selected'>Choose your text</option>
                <option value=""></option>
                <option value={text.text1} >Food</option>
                <option value={text.text2} >Yam</option>
                <option value={text.text3} >Beans</option>
                <option value={text.text4} >Indomie</option>
            </select>

            <p>Your option is {text}</p>
            
        </div>
    )
}

export default DropDown
