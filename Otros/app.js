// ✅ 1. Configuración de tu app desde Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAidNDyyV_bM9X0IxulxPa3iTMwnnW81XE",
  authDomain: "ecoagenda-by-adhal.firebaseapp.com",
  projectId: "ecoagenda-by-adhal",
  storageBucket: "ecoagenda-by-adhal.appspot.com", // <-- CORREGIDO: antes era "firebasestorage.app"
  messagingSenderId: "299756391530",
  appId: "1:299756391530:web:e35eb9428045675d684e13",
  measurementId: "G-MR6NK54GEX"
};

// ✅ 2. Inicializa Firebase con tu configuración
firebase.initializeApp(firebaseConfig);

// ✅ 3. Inicia sesión anónima (requiere que esté habilitado en Firebase Console)
firebase.auth().signInAnonymously()
  .then((userCredential) => {
    console.log("🔐 Usuario anónimo autenticado:", userCredential.user);
  })
  .catch((error) => {
    console.error("❌ Error en autenticación anónima:", error.code, error.message);
  });
