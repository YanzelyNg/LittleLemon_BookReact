// The below import defines which components come from formik
import { useState} from "react";
import {
    Box,
    HStack,
    VStack,
    Button,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Text,
    Heading,
  } from '@chakra-ui/react';
import "@fontsource/markazi-text";
import React from "react";
import { submitAPI } from './api';

  
export default function BookingForm(props) {
    const [name, setName] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState();
    const [selectedGuests, setSelectedGuests] = useState();
    const [selectedOccasion, setSelectedOccasion] = useState();
    const { availableTime, onSelectTime, onDateChange } = props;

    const handleSelectTime = (selectedTime) => {
        console.log(selectedTime);
        setSelectedTime(selectedTime)
        // Llamar a onSelectTime con la nueva fecha si es necesario
        onSelectTime(selectedTime);
    };

      const handleSelectGuests = (selectedGuests) => {
        console.log(selectedGuests);
        setSelectedGuests(selectedGuests);
    };

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate); // Actualizar la fecha seleccionada
        onDateChange(newDate);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto del navegador
        const newDate = new Date();

        const formData = {
          name: name,
          date: selectedDate,
          time: selectedTime,
          guests: selectedGuests,
        };
        submitAPI(formData);
        setName("");
        setSelectedGuests(2);
        setSelectedOccasion('');
        setSelectedDate(newDate);
        setSelectedTime('');
        //resetForm();
        console.log(formData);
    };    

    return (
        <Grid templateColumns='repeat(12, 1fr)' gap={2} m={[10,10,10,10]}>
            <GridItem colSpan={3}/>
            <GridItem colSpan={6} >
                <Box>
                <Heading align='center' size='md' color="#333333" fontFamily="Markazi Text" fontSize="40pt" fontWeight="bold" aria-describedby="Reservation Form Title">Reservation Form</Heading>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <VStack spacing={4}>
                    <FormControl isRequired>
                        <HStack spacing={8} >
                            <FormLabel htmlFor="name" width="30%" aria-describedby="Name">Name</FormLabel>
                            <Input id="name" placeholder='Complete Name' name="name" value={name} aria-describedby="Write your name" onChange={(e) => setName(e.target.value)}/>
                        </HStack>
                    </FormControl>
                    <FormControl isRequired>
                        <HStack spacing={8} >
                            <FormLabel htmlFor="book_date" width="30%" aria-describedby="Date">Date</FormLabel>
                            <Input id="book_date" placeholder='Date' type="date" value={selectedDate.toISOString().split('T')[0]}
                                aria-describedby="Select Reservation Date" onChange={handleDateChange}/>
                        </HStack>
                    </FormControl>
                    <FormControl isRequired>
                        <HStack spacing={8} >
                            <FormLabel htmlFor="book_time" width="30%" aria-describedby="Time">Time</FormLabel>
                            <Select id="book_time" onChange={handleSelectTime} placeholder="Select time" aria-describedby="Select Reservation Time">
                            {availableTime.map((time) => (
                                <option key={time} value={time}>
                                {time}
                                </option>
                            ))}
                            </Select>
                        </HStack>
                    </FormControl>
                    <FormControl isRequired>
                        <HStack spacing={8} >
                            <FormLabel htmlFor="guests" width="30%" aria-describedby="Number of Guests">Number of Guests</FormLabel>
                            <Box width="100%">
                            <NumberInput id="guests" value={selectedGuests} defaultValue={2} min={1} max={30} onChange={handleSelectGuests} aria-describedby="Select Number of Guest">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            </Box>
                        </HStack>
                        </FormControl>
                    <FormControl isRequired>
                        <HStack spacing={8} >
                            <FormLabel htmlFor="occasion" width="30%" aria-describedby="Occasion">Occasion</FormLabel>
                            <Box width="100%">
                            <Select id="occasion" value={selectedOccasion} placeholder="Select Occasion" aria-describedby="Select Occasion">
                                <option value='option1'>Birthday</option>
                                <option value='option2'>Anniversary</option>
                                <option value='option3'>Other</option>
                            </Select>
                            </Box>
                        </HStack>
                    </FormControl>

                    <Button type="submit" bg="#F4CE14" borderColor="#F4CE14" size='lg' marginRight={"10"} aria-label="Submit">
                        <Text fontWeight="bold" lineHeight="1" fontSize="18pt" fontFamily="Markazi Text" color="#333333" aria-describedby="Submit">Submit</Text>
                    </Button>                    

                    </VStack>
                    </fieldset>
                </form>

                </Box>
            </GridItem>
            <GridItem colSpan={3}/>
        </Grid>
    )
  }


//   <FormControl isRequired>
//   <HStack spacing={8} >
//       <FormLabel htmlFor="book_time" width="30%">Time</FormLabel>
//       <Input id="book_time" placeholder='Time' type="datetime-local"/>
//   </HStack>
// </FormControl>


//onChange={onSelectTime}
//{Object.entries(availableTime).map(([key, value]) => (



