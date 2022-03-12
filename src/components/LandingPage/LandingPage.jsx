import { Box, Grid } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../../redux/action/dataAction"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const LandingPage = $ =>{
const dispatch = useDispatch()
  useEffect($ =>{
        dispatch(fetchData())
  }, [])
    return <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>
          Total Invested
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          Current Value
        </Item>
      </Grid>
    </Grid>
    </Box>
}