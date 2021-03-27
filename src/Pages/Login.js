import { Button, CircularProgress, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Footer from '../Components/Header/Footer/Footer'
import Header from '../Components/Header/Header'
import { loginUser } from '../Redux/actions/userActions'


const styles = {
	gridContainer: {
		textAlign: 'center'
	},
	logo: {
		maxWidth: '5rem',
		ObjectFit: 'contain',
		margin: '20px auto 20px'
	}
}

const useStyles = makeStyles({
	root: {
		marginTop: 20
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	}
});

const Login = () => {
	const {loading,errors} = useSelector(state => state.UI)
	const dispatch=useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	})

	const handleChange = (event) => {
		setLoginForm({
			...loginForm,
			[event.target.name]: event.target.value
		})
	}

	
	const handleSubmit = (event) => {
		event.preventDefault();

		const userData = {
			email: loginForm.email,
			password: loginForm.password
		}

		dispatch(loginUser(userData,history));

	}
	return (
		<div>
			<Header />

			<div>
				<Grid container style={styles.gridContainer}>
					<Grid item sm />
					<Grid item sm >
						
						<Typography variant='h4'>Login</Typography>

						<form noValidate onSubmit={handleSubmit}>
							<TextField
								id='email'
								name='email'
								label='Email'
								type='email'
								value={loginForm.email}
								onChange={handleChange}
								fullWidth
								helperText={errors.email}
								error={errors.email ? true : false}
							/>

							<TextField
								id='password'
								name='password'
								label='Password'
								type='password'
								value={loginForm.password}
								onChange={handleChange}
								fullWidth
								helperText={errors.password}
								error={errors.password ? true : false}
							/>
							{errors.general &&
								<Typography
									variant='body'
									className={classes.customError}
								>
									{errors.general}
								</Typography>}
							<br />
							<Button
								type='submit'
								variant='contained'
								color='primary'
								className={classes.root}
								// disabled={loginForm.loading}
							>
								Login 
								{loading && <CircularProgress size={20} color='secondary' />}
							</Button>
							<br />
							{/* <small>Don't have an account? signup <Link to='/signup'>here</Link></small> */}
						</form>
					</Grid>
					<Grid item sm />


				</Grid>

			</div>
			<br />
			<br />
			<br />
			<Footer />
		</div>
	)
}

export default Login
