(function () {
  'use strict';

  const firebaseConfig = {
    apiKey: "AIzaSyBk-ApTWOqE9XsnYJKGGGbA9V16nK3ITIk",
    authDomain: "alertafoco-73a3d.firebaseapp.com",
    projectId: "alertafoco-73a3d",
    storageBucket: "alertafoco-73a3d.firebasestorage.app",
    messagingSenderId: "363387480496",
    appId: "1:363387480496:web:0572c490ca7bd70189ce75"
  };

  window.ALERTAFOCO_LOCAL_KEY = 'alertafoco-local-reportes';

  function readLocalReports() {
    try {
      const raw = localStorage.getItem(window.ALERTAFOCO_LOCAL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  }

  function writeLocalReports(list) {
    try {
      localStorage.setItem(window.ALERTAFOCO_LOCAL_KEY, JSON.stringify(list));
    } catch (error) {
      console.warn('No se pudo guardar el reporte localmente:', error);
    }
  }

  window.ALERTAFOCO_getLocalReports = readLocalReports;
  window.ALERTAFOCO_saveLocalReport = function (report) {
    const list = readLocalReports();
    const normalized = {
      ...report,
      id: report.id || `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      fecha: report.fecha || { seconds: Math.floor(Date.now() / 1000) },
      fuente: 'local'
    };
    const next = [normalized, ...list].slice(0, 250);
    writeLocalReports(next);
    return normalized;
  };

  window.db = null;

  if (window.firebase && window.firebase.apps) {
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(firebaseConfig);
    }
    if (window.firebase.firestore) {
      window.db = window.firebase.firestore();
    }
  }

  if (!window.db) {
    console.warn('Firebase no está disponible; la app usará modo local para reportes y visualización.');
  }
})();
