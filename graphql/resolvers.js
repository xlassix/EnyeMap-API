const admin = require('firebase-admin');
var serviceAccount = require("../clear-practice-251418-firebase-adminsdk-ens2o-60e4e42b41.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://clear-practice-251418.firebaseio.com"
  });

const db = admin.firestore()

const resolverFunctions = {
    Query: {
        test:()=>"test",
        getHistories: (_, { userId }) => {
            return db.collection('history').where("userId", "==", `${userId}`)
                .get()
                .then((snapshot) => {
                    const docs = snapshot.empty
                    ?[]
                    :snapshot.docs.map((doc)=>{
                        return ({id:doc.id,...doc.data()})
                    })
                    return (docs)
                })
        }
    }
};

module.exports = resolverFunctions;