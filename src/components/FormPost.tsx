import { Input, Button } from "antd";
import React,{useState} from 'react'


export default function FormPost({showModal,onSearch}) {
  const [id, setId] = useState("");

  return (
    <><Input placeholder="Enter Id" type="number" value={id} onChange={e => setId(e.target.value)}/>
    <div className="formBtnb">
    <Button type="primary" onClick={()=>{onSearch(id);setId('')}}>
      Fetch Post
    </Button>
    <Button type="primary" onClick={()=>showModal(true)}>
      Create Post
    </Button>
    </div>
    </>
  )
}
