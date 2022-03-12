import styled from "@emotion/styled";
import { Box, Button, Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../redux/action/dataAction"
import { Artists } from "../Artists/Artists";
import { Player } from "../Player/Player";


export const LandingPage = $ => {

  const [index, setIndex] = useState(1)
  const [filter, setFilter] = useState(false)
  const [showArtists, setShowArtists] = useState(false)
  const dispatch = useDispatch()
  useEffect($ => {
    dispatch(fetchData())
  }, [])
  const { data } = useSelector(state => ({
    data: state.dataState.data
  }))
  const handleAllSongs = $  => {
    
    dispatch(fetchData());
    setFilter(false)

  }
  
  const handleClick = index => {
    setIndex(index);
  }
  return <div style={{ 
    minHeight: '100%'
  }}>
    {!filter && <Button
      halfwidth="true"
      variant="contained"
      color="secondary"
      onClick={() => setShowArtists(!showArtists)}
    >
      Artists
    </Button>}
    {filter && <Button
      halfwidth="true"
      variant="contained"
      color="inherit"
      onClick={() => handleAllSongs()}
    >
     All Songs
    </Button>}
    <br/>
    <br/>
    <br/>
    {showArtists && <Grid>
      <Artists setShowArtist={setShowArtists} setFilter={setFilter}/>
    </Grid>}
    <Box sx={{ flexGrow: 1 }}>


      <Grid container spacing={2} style={{
        textAlign: 'center',
        justifyContent: 'center'
        
      }}>

        {data.map((song, index) => {
          return <Grid item xs={2.5} key={song.url} onClick={$ => handleClick(index)}>
            <img alt={song.song} width='100%' height='100%' src={song.cover_image} />

          </Grid>
        })}

      </Grid>
    </Box>

    <Player index={index} setIndex={setIndex} data={data} />
  </div>
}
