import React , {useState} from 'react'

const IndexCheckBox = () => {

    const [checked , setChecked] = useState(false)


    const handelCheckBox = () =>{
        setChecked(!checked)
    }

    console.log(checked)
  return (
    <>
        <h1>CheckBox</h1>

        <label>
            <input type="checkbox" checked={checked} onChange={handelCheckBox}/>
            
        </label>
    </>
  )
}

export default IndexCheckBox