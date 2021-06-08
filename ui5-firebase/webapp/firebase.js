sap.ui.define([
    "sap/ui/model/json/JSONModel",
], function (JSONModel) {
    "use strict";

    // Firebase-config retrieved from the Firebase-console
    const firebaseConfig = {
        apiKey: "AIzaSyAJPQT1J26JWudr0BLWqRX2POHlSDIy7_M",
        authDomain: "ui5-firebase-8cbca.firebaseapp.com",
        projectId: "ui5-firebase-8cbca",
        storageBucket: "ui5-firebase-8cbca.appspot.com",
        messagingSenderId: "868568744946",
        appId: "1:868568744946:web:80d6191a9d2390462e616b",
        measurementId: "G-SWGFJ4RNPH"
    };

    return {
        initializeFirebase: function () {
            // Initialize Firebase with the Firebase-config
            firebase.initializeApp(firebaseConfig);

            // Create a Firestore reference
            const firestore = firebase.firestore();

            // Firebase services object
            const oFirebase = {
                firestore: firestore
            };

            // Create a Firebase model out of the oFirebase service object which contains all required Firebase services
            var fbModel = new JSONModel(oFirebase);

            // Return the Firebase Model
            return fbModel;
        }
    };
});