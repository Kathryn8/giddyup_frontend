import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import authFetch from '../axios/interceptors';

const url = '/users/';

const variant = "filled"; //you can change this between [filled, standard, """]


const UserProfileForm = ({ user }) => {
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
      } catch (error) {
        console.log(error.response.data.status);
        // setBook(error.response.data.status);
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
    <Box sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* title, firstName, last Name */}
        <Box >

          {/* <Controller
            name="title"
            control={control}
            // defaultValue=""
            render={({ field }) => (
              <>
                <InputLabel>Title</InputLabel>
                <Select
                  {...field}
                  // label="Age"
                  // labelId="age-range"
                  // id="age-range"
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
              </>
            )}
          /> */}
          <Box sx={{ display: 'inline' }}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} variant={variant} label="First Name" sx={{ m: 1, minWidth: 280 }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>
            <Controller

              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} variant={variant} label="Last Name" sx={{ m: 1, minWidth: 280 }} />
              )}
            />
          </Box>
        </Box>

        {/* age, phoneNumber, Linkedin */}
        <Box >
          <Box sx={{ display: 'inline' }}>
            <Controller
              name="age"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <FormControl variant={variant} sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="age-range">Age</InputLabel>
                  <Select
                    {...field}
                    // label="Age"
                    // labelId="age-range"
                    // id="age-range"
                    // value=""
                    defaultValue=''
                  >
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
          <Box sx={{ display: 'inline' }}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} variant={variant} label="Mobile Number" sx={{ m: 1, minWidth: 150 }} />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="socials.linkedin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="LinkedIn Profile URL" variant={variant} sx={{ m: 1, minWidth: { xs: 280, sm: 500 } }} />
              )}
            />
          </Box>
        </Box>


        {/* streetAddress, suburb, postcode */}

        <Box >
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="address.streetAddress"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Street Address" variant={variant} sx={{ m: 1, minWidth: { xs: 300, sm: 350 } }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="address.suburb"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Suburb" variant={variant} sx={{ m: 1, minWidth: 280 }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="address.postcode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Post Code" variant={variant} sx={{ m: 1, minWidth: 100 }} />
              )}
            />
          </Box>
        </Box>

        {/* aboutMe, preferences */}
        <Box >
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="aboutMe"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="About Me" fullWidth multiline maxRows={4} variant={variant} sx={{ m: 1 }} />
              )}
            />
          </Box>
          <Box sx={{ display: 'inline' }}>

            <Controller
              name="preferences"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Preferences" variant={variant} sx={{ m: 1 }} />
              )}
            />
          </Box>

        </Box>


        {/* // <TextField id="filled-basic" label="Filled" variant="filled" /> */}

        {/* <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
      <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
      <input type="datetime" placeholder="Age" {...register} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
      <input type="text" placeholder="Suburb" {...register} />
      <textarea {...register("Street address", {})} />
      <input type="text" placeholder="Postcode" {...register("Postcode", {})} />
      <input type="text" placeholder="About me" {...register("About me", {})} />
      <select {...register("Preferences")}>
        <option value="music">music</option>
        <option value=" pets"> pets</option>
        <option value=" talking"> talking</option>
        <option value=" dancing"> dancing</option>
        <option value=" seahorses"> seahorses</option>
      </select>
      <input type="text" placeholder="LinkedIn profile URL" {...register("LinkedIn profile URL", {})} /> */}
        <Button variant="contained" color="primary" type="submit">Submit</Button>
        {/* <input type="submit" /> */}
      </form >
    </Box >
  )
}

export default UserProfileForm
