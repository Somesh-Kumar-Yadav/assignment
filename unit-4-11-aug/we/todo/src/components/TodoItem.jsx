import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTodo, togTodo } from "../redux/actions";
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const useStyles = makeStyles({
    container:{
        paddingTop:"1rem"
    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    add: {
        marginLeft:"1rem"
    },
    input: {
        width: "300px",
    },
    show: {
        width: "50%",
    }
})


export function TodosItem() {
    const [todo, setTodo] = useState("");
    const params = useParams();
    const classes = useStyles();
    const { todos } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodo());
    },[dispatch])
    const handleEdit = () => {
        axios
            .patch("http://localhost:3004/todos/" + params.id, {
                title: todo
            });
        setTodo("");
        dispatch(getTodo());
        dispatch(getTodo());
    }
    const list = todos.filter((e) => {
        return e.id === Number(params.id);
    })
        const handleToggle = (item) => {
        const payload={
            id: item[0],
            status:item[1]
        }
        console.log(payload)
dispatch(togTodo(payload));
        dispatch(getTodo());
    }
    console.log(list,todos);
    return <>
        <Container className={classes.container} maxWidth="sm">
            <Box className={classes.box}>
                <TextField value={todo} onChange={((e) => {
                    setTodo(e.target.value)
                })} className={classes.input} size="large" id="outlined-basic" label="Edit Todo" variant="outlined" />
                <Fab onClick={handleEdit} size="small" className={classes.add} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
            </Box>
        </Container>
    <Container className={classes.show} maxWidth="xl">
            <List>
                {list.map((item) => {
                    return (
          <ListItem key={item.id} role={undefined} dense button >
            <ListItemIcon>
              <Checkbox
                                    edge="start"
                                    checked={item.status}
                                    color="primary"
                                    tabIndex={-1}
                                    disableRipple
                                    onClick={(e) => { handleToggle([item.id, e.target.checked]) }}
              />
            </ListItemIcon>
            <ListItemText id={item.id} primary={`${item.title}`} />
          </ListItem>
        );
                })}
            </List>
        </Container>
    </>
}