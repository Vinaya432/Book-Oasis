import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//upload new book

export const uploadNewBookAPI = async(bookdetail)=>{
    return await commonAPI("POST",`${SERVER_URL}/allbooks`,bookdetail)
}

//get all books

export const getAllBooksAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allbooks`,"")

}

//view a single book
export const getABookAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allbooks/${id}`,"")
}

//Remove a book
export const removeABookAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allbooks/${id}`,{})

}

//insert a book into favourites
export const addBookToFavouriteAPI = async(bookdetail)=>{
    return await commonAPI("POST",`${SERVER_URL}/favourites`,bookdetail)
}

//get book from favourite
export const getBookFromFavouriteAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/favourites`,"")

}

//remove favourite
export const removeFavouriteAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/favourites/${id}`,{})

}