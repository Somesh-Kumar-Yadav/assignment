
import { useDispatch, useSelector } from "react-redux";
import {  delTodo, getTodo, togTodo } from "../redux/actions";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles, Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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


export function CompletedTodos() {
    const classes = useStyles();
    const { todos } = useSelector((state) => state);
    const dispatch = useDispatch();
    const list = todos.filter((e) => {
        return e.status === true;
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
    const handleDelete=(id)=>{
        dispatch(delTodo(id));
        dispatch(getTodo());
    }
    return <>
        
    <Container className={classes.show} maxWidth="xl">
        <Typography color="primary" variant="h3">Completed Todos</Typography>
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