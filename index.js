$(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBphAsIxFM3eMwfzs23-cMoW0dgWNPJ-G8",
        authDomain: "playhub-f4f91.firebaseapp.com",
        databaseURL: "https://playhub-f4f91.firebaseio.com",
        projectId: "playhub-f4f91",
        storageBucket: "playhub-f4f91.appspot.com",
        messagingSenderId: "429002907051",
        appId: "1:429002907051:web:3020569f23abae137946ee",
        measurementId: "G-F30N79CB7C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();

    db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());
            var row =     `<div class="card text-left">
            <img class="card-img-top" src="${doc.data().posterURL}" alt="">
            <div class="card-body">
              <h4 class="card-title">${doc.data().title}(${doc.data().years})</h4>
              <p class="card-text">${doc.data().shortstory}</p>
            </div>
          </div>`
            // <h3>${doc.data().title}</h3>
            $("#list").append(row);
        });
    });
});
