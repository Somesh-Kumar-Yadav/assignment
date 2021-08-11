import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, getTodo, togTodo } from "../redux/actions";
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";


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

export function TodosDisplay() {
    const [todo, setTodo] = useState("");
    const { todos } = useSelector((state) => state);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch])
    const handleToggle = (item) => {
        const payload={
            id: item[0],
            status:item[1]
        }
        console.log(payload)
dispatch(togTodo(payload));
        dispatch(getTodo());
    }
    const handleAdd = () => {
        const payload = {
            status: false,
            title:todo
        };
        dispatch(addTodo(payload));
        dispatch(getTodo());
        setTodo("");
    }
    const handleDelete=(id)=>{
        dispatch(delTodo(id));
        dispatch(getTodo());
    }
    return <>
        <Container className={classes.container} maxWidth="sm">
            <Box className={classes.box}>
                <TextField value={todo} onChange={((e) => {
                    setTodo(e.target.value)
                })} className={classes.input} size="large" id="outlined-basic" label="+ Add Todo" variant="outlined" />
                <Fab onClick={()=>{handleAdd()}} size="small" className={classes.add} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
            </Box>
        </Container>
        <Container className={classes.show} maxWidth="xl">
            <List>
                {todos.map((item) => {
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
                            <Link to={`/${item.id}`}>
                            <ListItemText id={item.id} primary={`${item.title}`} />
                            </Link>
            <ListItemSecondaryAction>
              <IconButton onClick={()=>{handleDelete(item.id)}} edge="end" aria-label="delete">
               <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
                })}
            </List>
        </Container>
    </>
}