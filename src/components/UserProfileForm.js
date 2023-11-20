import { Alert, Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import authFetch from '../axios/interceptors';

const url = '/users/';

const variant = "outlined"; //you can change this between [filled, standard, outlined]

const UserProfileForm = ({ user, editMode, setEditMode }) => {
  const disabled = !editMode;

  // snackbar hook:
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    // setOpenFail(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFail(false);
  };

  // set the states for the PATCH api call:
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userObj, setUserObj] = useState({ user });

  const { register, control, handleSubmit, formState: { errors } } = useForm({ defaultValues: { ...user } });
  const onSubmit = data => {
    console.log("DATA OBJ SENT:")
    console.log(data);
    const handleUserPatch = async () => {
      try {
        const resp = await authFetch.patch(url + user._id, {
          ...data
        }, { param: true })
        console.log(resp.data.data.user)
        setUserObj(resp.data.data.user);
        setOpenSuccess(true);
        setEditMode(false);
      } catch (error) {
        console.log(error.response.data.status);
        setOpenFail(true);
      }
    }
    handleUserPatch();
  }

  // console.log(errors);
  // console.log(user);
  // const handleButtonClick = () => {
  // handleUserPatch();
  // handleClose();

  const ageRange = Array.from({ length: 50 }, (_, index) => 18 + index); // Generate age range from 18 to 67

  return (
    <Box sx={{ px: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* 
===================================================
Tell us about you: aboutMe, preferences
===================================================
 */}
        <Box sx={{ py: 1 }}>
          <Box sx={{ m: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
            <Typography variant="h5" >
              Tell us about you*, {user.firstName}
            </Typography>
            <Typography variant="caption" >
              * other users can see this information
            </Typography>
          </Box>

          <Box sx={{ py: 1 }}>

            {/* <TextField
              {...register("aboutMe", {
                // maxLength: 5,
                // required: "HOHOHO"
              })}
              // error={!!errors.aboutMe}
              // helperText={errors.email?.message}
              disabled={disabled}
              label="About Me"
              type="aboutMe"
              fullWidth
              multiline
              maxRows={4}
              variant={variant}
              sx={{ m: 1, pr: 2 }}
            /> */}


            <Controller
              name="aboutMe"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="About Me" fullWidth multiline maxRows={4} variant={variant} sx={{ m: 1, pr: 2 }} />
              )}
            />

          </Box>
          <Box sx={{ py: 1 }}>
            <Controller
              name="preferences"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="Preferences" fullWidth variant={variant} sx={{ m: 1, pr: 2 }} />
              )}
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <Controller
              name="socials.linkedin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="LinkedIn Profile URL" variant={variant} sx={{ m: 1, pr: 2 }} fullWidth />
              )}
            />
          </Box>
        </Box>
        <Divider sx={{ m: 1 }} />

        {/* 
===================================================
Phone number
===================================================
 */}
        <Box sx={{ py: 1 }}>
          <Box sx={{ m: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
            <Typography variant="h5" >
              Your mobile number*
            </Typography>
            <Typography variant="caption" >
              * only shared with drivers whom you've booked or passangers who booked with you
            </Typography>
          </Box>
          <Box sx={{ py: 1 }}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value }, fieldState: { errors } }) => (
                <TextField
                  disabled={disabled}
                  // helperText={error ? errors.message : "Phone number must be exactly 10 digits"}
                  // size="small"
                  error={!!errors?.phoneNumber} // if you make this plural then red text appears on element
                  helperText={errors?.phoneNumber?.message}
                  onChange={onChange}
                  value={value}
                  // fullWidth
                  variant={variant}
                  label="Mobile Number"
                  // variant="outlined"
                  sx={{ m: 1, minWidth: 150 }}
                />
              )}
            />
          </Box>
        </Box>
        <Divider sx={{ m: 1 }} />

        {/* 
===================================================
Personal Info: title, firstName, last Name, age
===================================================
 */}

        <Box sx={{ py: 1 }}>
          <Box sx={{ m: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
            <Typography variant="h5" >
              Your Personal Info*
            </Typography>
            <Typography variant="caption" >
              * only first name is shared with other users
            </Typography>
          </Box>

          <Box sx={{ py: 1, display: 'inline' }}>
            <Controller
              name="title"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <FormControl variant={variant} disabled={disabled} sx={{ my: 2, mx: 1, minWidth: 100 }}>
                  <InputLabel>Title</InputLabel>
                  <Select
                    {...field}
                    defaultValue=''
                  >
                    <MenuItem value=''>none</MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
                    <MenuItem value="Dr">Dr</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                    <MenuItem value="X">X</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }} >
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} variant={variant} label="First Name" sx={{ my: 2, mx: 1, minWidth: { xs: 300, sm: 280 } }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>
            <Controller

              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} variant={variant} label="Last Name" sx={{ my: 2, mx: 1, minWidth: { xs: 300, sm: 280 } }} />
              )}
            />
          </Box>
        </Box>

        <Box >
          <Box sx={{ py: 1 }}>
            <Controller
              name="age"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <FormControl variant={variant} disabled={disabled} sx={{ mt: 0, mb: 1, mx: 1, minWidth: 100 }}>
                  <InputLabel id="age-range">Age</InputLabel>
                  <Select
                    {...field}
                    defaultValue=''
                  >
                    <MenuItem value=''>none</MenuItem>
                    {ageRange.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </Box>

        {/* 
===================================================
Personal Info: streetAddress, suburb, postcode
===================================================
 */}

        <Box sx={{ position: 'relative' }}>
          <Box >

            <Controller
              name="address.streetAddress"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="Street Address" variant={variant} sx={{ mx: 1, my: 2, minWidth: { xs: 300, sm: 516 } }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="address.suburb"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="Suburb" variant={variant} sx={{ mx: 1, my: 2, minWidth: { xs: 300, sm: 280 } }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="address.postcode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} disabled={disabled} label="Post Code" variant={variant} sx={{ mx: 1, my: 2, minWidth: 100 }} />
              )}
            />
          </Box>
        </Box>

        {disabled ?
          <></>
          :
          <Button variant="contained" color="primary" type="submit" sx={{ p: 1, mx: 1, my: 2, position: 'absolute', right: { xs: '56px', sm: '40px', md: '200px', lg: '350px', xl: '550px' } }}>Submit</Button>
        }
        <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose1}>
          <Alert onClose={handleClose1} color="success" sx={{ width: '100%' }}>
            Your profile was updated successfully
          </Alert>
        </Snackbar>
        <Snackbar open={openFail} autoHideDuration={3000} onClose={handleClose2}>
          <Alert onClose={handleClose2} color="error" sx={{ width: '100%' }}>Something went wrong and we couldn't update your profile</Alert>
        </Snackbar>
      </form >
    </Box >
  )
}

export default UserProfileForm
