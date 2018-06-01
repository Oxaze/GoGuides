import firebase from "firebase/app";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyBvN7ueuOtgQ0pcKwdn-DELxlehD1i6Kuw",
	authDomain: "goguides-54993.firebaseapp.com",
	databaseURL: "https://goguides-54993.firebaseio.com",
	projectId: "goguides-54993",
	storageBucket: "goguides-54993.appspot.com",
	messagingSenderId: "773867857722",
};
firebase.initializeApp(config);

const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);

export const db = firebase
	.firestore()
	.enablePersistence()
	.then(() => {
		console.log("Initialized Cloud Firestore through Firebase.");
	})
	.catch(err => {
		if (err.code === "failed-precondition") {
			console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
		} else if (err.code === "unimplemented") {
			console.log("The current browser does not support all of the features required to enable persistence");
		}
	});
