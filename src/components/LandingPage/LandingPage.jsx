import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../redux/action/dataAction"
import { Player } from "../Player/Player";


export const LandingPage = $ => {

  const [index, setIndex] = useState(1)
  const dispatch = useDispatch()
  useEffect($ => {
    dispatch(fetchData())
  }, [])
  const { data, artists } = useSelector(state => ({
    data: state.dataState.data,
    artists: state.dataState.artists
  }))
  console.log(artists)
  const handleClick = index => {
    setIndex(index);
  }
  return <><Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} style={{
      textAlign: 'center',
      justifyContent: 'center'
    }}>
      {data.map((song, index) => {
        return <Grid item xs={2.5} key={song.url} onClick={$ => handleClick(index)}>
          <img width='100%' height='100%' src={song.cover_image} />

        </Grid>
      })}

    </Grid>
  </Box>
    {<Player index={index} setIndex={setIndex} data={data} />}
  </>
}
