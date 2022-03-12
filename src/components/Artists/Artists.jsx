import { Button, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterArtist } from "../../redux/action/dataAction"

export const Artists = ({setShowArtist, setFilter}) =>{
    const dispatch = useDispatch()
    const [artist, setArtist] = useState()
    const { artists } = useSelector(state => ({
        artists: state.dataState.artists,
       
      }))
    const handleClick = el => {
          setArtist(el);
          setShowArtist(false);
          setFilter(true)
          dispatch(filterArtist(el))
    }
  
      return   <List sx={{ width: '20%', position:'absolute'}}>
      {artists.map((el)=>
      <ListItem key={el} >
  
     <Button
      halfwidth="true"
      variant="contained"
      color="inherit"
      onClick={$=> handleClick(el)}
     
    >
      {el}
    </Button>
       
      </ListItem>)}
    </List>
}