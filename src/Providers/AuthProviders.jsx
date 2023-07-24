// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import app from "../firebase/firebase.config";



// export const AuthContext = createContext(null)
// const auth = getAuth(app)

// const googleProvider = new GoogleAuthProvider()

// const AuthProviders = ({ children }) => {

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)


//     const signUpUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // const signInUser = (email, password) => {
//     //     setLoading(true)
//     //     signInWithEmailAndPassword(auth, email, password)
//     // }

//     // const signInOutUser = () => {
//     //     return signOut(auth)
//     // }


//     // // Social
//     // const loginWithGoogle = () => {
//     //     setLoading(true)
//     //     return signInWithPopup(auth, googleProvider)
//     // }


//     // const displayUserInfo = (name, photoURL) => {
//     //     return updateProfile(auth.currentUser, {
//     //         displayName: name,
//     //         photoURL: photoURL
//     //     })
//     // }


//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)


//             console.log(currentUser);
//             setLoading(false)
//             // // Get and set Token
//             // if (currentUser) {
//             //     axios.post('https://edtech-university-application-server.vercel.app/jwt', { email: currentUser.email })
//             //         .then(data => {
//             //             const jwtToken = data.data.token
//             //             localStorage.setItem('access-token', jwtToken)
//             //             setLoading(false)
//             //         })
//             // } else {
//             //     return localStorage.removeItem('access-token')
//             // }

//         })
//         return () => {
//             return unSubscribe;
//         }
//     }, [])


//     const authInfo = {
//         user,
//         loading,
//         signInUser,
//         signUpUser,
//         signInOutUser,
//         displayUserInfo,
//         loginWithGoogle
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;