import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { TextField, Container, Grid } from '@material-ui/core'


export default function LoginUi(props) {

    return (
        <div>
            <Container>
                <Grid container justify="center" spacing={2} alignItems="center">
                    <Grid item>
                        <TextField id="username" label="账号" type="text" margin="normal" onChange={props.usernameChange}/>
                    </Grid>
                    <Grid item>
                        <TextField id="password" label="密码" type="password" margin="normal" onChange={props.passwordChange}/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" size="large" onClick={props.handleSubmit}>进入</Button>
                    </Grid>
                </Grid>
            </Container>  
        </div>
        )
}
