import React, { useEffect, useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Mainblock from "../components/Mainblock";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from '../components/api';
//import { useFormikContext } from 'formik';


function Reservations() {

    // const availableTime = {
    //     1: '10:00 AM',
    //     2: '12:00 PM',
    //     3: '02:00 PM',
    //     4: '04:00 PM'
    //   };
    const [availableTime, setAvailableTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // useEffect(() => {
    // const fetchAPI = async (date) => {
    //     try {
    //     // Coloca el código del script aquí
    //     const seededRandom = function (seed) {
    //         var m = 2**35 - 31;
    //         var a = 185852;
    //         var s = seed % m;
    //         return function () {
    //             return (s = s * a % m) / m;
    //         };
    //     }

    //     const fetchAPI = function(date) {
    //         let result = [];
    //         let random = seededRandom(date.getDate());

    //         for(let i = 17; i <= 23; i++) {
    //             if(random() < 0.5) {
    //                 result.push(i + ':00');
    //             }
    //             if(random() < 0.5) {
    //                 result.push(i + ':30');
    //             }
    //         }
    //         return result;
    //     };

    //     // Obtener el availableTime llamando a fetchAPI
    //     const data = fetchAPI(date);
    //     setAvailableTime(data);
    //     } catch (error) {
    //     console.log(error);
    //     }
    // };

    // const currentDate = new Date(); // Obtener la fecha actual o la fecha deseada
    // fetchAPI(currentDate);
    // }, []);


    useEffect(() => {
        const fetchAvailableTime = async () => {
          try {
            const data = await fetchAPI(selectedDate);
            setAvailableTime(data);
          } catch (error) {
            console.log(error);
          }
        };

        fetchAvailableTime();
      }, [selectedDate]);


    const handleSelectTime = (event) => {
        const selectedTime = event.target.value;
        // Haz algo con el tiempo seleccionado...
        console.log(selectedTime);
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate); // Actualizar la fecha seleccionada
      };    

    return (
    <ChakraProvider>
        <main>
            <Mainblock/>
            
            {availableTime ? (
            <BookingForm availableTime={availableTime} onSelectTime={handleSelectTime} onDateChange={handleDateChange}/>
            ) : (
            <p>Loading available times...</p>
            )}            

            <Footer/>
        </main>

    </ChakraProvider>    
    );
}

export default Reservations;

// <BookingForm availableTime={availableTime} onSelectTime={handleSelectTime} /> 