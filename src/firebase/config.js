import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBRlvElzrdRORkQRpCniR4zgtixwIBibI4',
    databaseURL: 'https://chatapp-c2e16.firebaseio.com/',
    projectId: 'chatapp-c2e16',
    appId: '1:978509051384:android:c19082fb2b2d5a12f2d20d',
}

export default Firebase.initializeApp(firebaseConfig);