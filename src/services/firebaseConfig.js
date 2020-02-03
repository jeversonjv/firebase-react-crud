import * as firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyArKfgVE87_KZkMCmyY18pbv8g3umLEpvs',
    authDomain: 'newslatter-8e1b3.firebaseapp.com',
    databaseURL: 'https://newslatter-8e1b3.firebaseio.com',
    projectId: 'newslatter-8e1b3',
    storageBucket: 'newslatter-8e1b3.appspot.com',
    messagingSenderId: '260223496792',
    appId: '1:260223496792:web:ecc61bcf497ec2c2a3d02d',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const storage = firebase.storage().ref();
