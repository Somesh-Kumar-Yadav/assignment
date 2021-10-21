import React from "react"
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
margin-left: ${props => String(props.nums * 20) + "px" };
padding-left:10px;
border-left:1px solid black
`
export const Comments = (props) => {
    const [comments, setComments] = React.useState({replies:[]});
	React.useEffect(() => {
		axios.get(`http://localhost:3002/comments/${props.id}`).then((res) => {
            setComments(res.data);
		});
	}, [props.id]);
    const [tab, setTab] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState("");
    const handleClick = () => {
        setTab(!tab);
    }
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = () => {
        const payload = {
            "author": "somesh",
            "body": text,
            "timestamp": Date.now(),
            "points": "3",
            "main":false,
            "replies": []
        }
        axios.post(`http://localhost:3002/comments`, payload).then(res => {
            const pay = { replies: [...comments.replies, res.data.id] };
            setComments({...comments,replies:[...comments.replies,res.data.id]})
            axios.patch(`http://localhost:3002/comments/${props.id}`,pay).then(res => {
                setText("");
                setTab(false);
            })
        })
    }
    return <Div nums={props.nums}>
        <strong onClick={handleOpen} style={{cursor:"pointer"}}>+</strong>
        <div><p>{comments?.author} {comments?.points} point 23 mintues ago</p></div>
        <div><p><strong>{comments?.body}</strong></p></div>
        <div><p style={{ cursor: "pointer" }} onClick={handleClick}>Reply</p>{tab && <div><input val={text} onChange={ handleChange}/><button onClick={handleSubmit}>Submit</button></div>}</div>
        <div>{!open && comments?.replies.map(item => {
            return <Comments id={item} nums={props.nums + 1} key={ item.id}/>
        })}</div> 
    </Div>
}