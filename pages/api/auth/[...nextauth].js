import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook'
import { db, app, firebaseConfig } from '../../../firebase';
import  { FirebaseAdapter }  from '@next-auth/firebase-adapter';
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({
    providers: [    
       FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
       }),
    ],
    adapter: FirebaseAdapter({
        db: db,
        ...firestoreFunctions,
    }),
})