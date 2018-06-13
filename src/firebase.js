import { initializeApp } from 'firebase';

const app = initializeApp({
        apiKey: "AIzaSyBfG03jNJ9nxUQny-vouVvaXXVB-DWrttU",
        authDomain: "notes-e8a4e.firebaseapp.com",
        databaseURL: "https://notes-e8a4e.firebaseio.com",
        projectId: "notes-e8a4e",
        storageBucket: "",
        messagingSenderId: "925398845614" 
});

export const db = app.database();
export const titlesRef = db.ref('titles');