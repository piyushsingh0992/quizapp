import React from 'react';
import axios, { AxiosError } from 'axios';

// type apiCallPropsType = {
//     type: string,
//     endPoint: string, body?: any
// }

// function apiErrorHandler({ error }: { error: any }) {
//     if (axios.isAxiosError(error)) {
//         if (error && error.response) {
//             return { success: false, message: error.response.data.message }
//         }
//     }
//     return { success: false, message: "Sorry Couldn't full fill your Request" }
// }


// const url = "https://pets-1.piyushsingh6.repl.co/recommendation";
// export async function apiCall({ type, endPoint, body }: apiCallPropsType) {

//     switch (type) {
//         case "GET":

//             try {
//                 let { status, data } = await axios.get(
//                     `${url}/${endPoint}`,
//                 )
//                 if (status === 200) {
//                     return { success: true, data: data }
//                 } else {
//                     return { success: false, message: data.message }
//                 }
//             } catch (error) {
//                 return apiErrorHandler(error);
//             }
//         case "POST":

//             try {
//                 let { status, data } = await axios.post(
//                     `${url}/${endPoint}`, body
//                 )
//                 if (status === 200) {
//                     return { success: true, data: data }
//                 } else {
//                     return { success: false, message: data.message }
//                 }
//             } catch (error) {
//                 return apiErrorHandler(error);
//             }
//         case "DELETE":

//             try {
//                 let { status, data } = await axios.delete(
//                     `${url}/${endPoint}`, { data: body }
//                 )
//                 if (status === 200) {
//                     return { success: true, data: data }
//                 } else {
//                     return { success: false, message: data.message }
//                 }
//             } catch (error) {
//                 return apiErrorHandler(error);
//             }


//         default:
//             return { success: false, message: "Sorry Couldn't full fill your Request" }
//     }

//     try {

//     } catch (error) {

//     }



// }