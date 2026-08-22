document.addEventListener('DOMContentLoaded', () => {

    // 1. Header scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Chiudi il menu quando si clicca un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            
            // Messaggio elegante di conferma
            alert(`Grazie ${name}, la tua richiesta per U&G Luxury Events Milano è stata inviata con successo. Il nostro team ti contatterà entro 24 ore.`);
            
            contactForm.reset();
        });
    }

    // 4. Video Hover playback safety (Assicura la riproduzione su iOS/Mobile)
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.muted = true;
        video.play().catch(error => {
            console.log("Autoplay intercettato dal browser:", error);
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieModal = document.getElementById('cookie-modal');
  const cookieTrigger = document.getElementById('btn-cookie-trigger');

  const btnAcceptAll = document.getElementById('btn-accept-all');
  const btnRejectAll = document.getElementById('btn-reject-all');
  const btnCustomize = document.getElementById('btn-customize');
  const btnSavePreferences = document.getElementById('btn-save-preferences');
  const modalClose = document.getElementById('cookie-modal-close');

  const chkAnalytics = document.getElementById('chk-analytics');
  const chkMarketing = document.getElementById('chk-marketing');

  // Controlla se le preferenze sono già salvate
  const savedConsent = localStorage.getItem('cookie_consent_preferences');

  if (!savedConsent) {
    cookieBanner.style.display = 'block';
  } else {
    applyConsent(JSON.parse(savedConsent));
  }

  // Evento "Accetta Tutti"
  btnAcceptAll.addEventListener('click', function () {
    const preferences = { necessary: true, analytics: true, marketing: true };
    saveConsent(preferences);
  });

  // Evento "Rifiuta Non Necessari"
  btnRejectAll.addEventListener('click', function () {
    const preferences = { necessary: true, analytics: false, marketing: false };
    saveConsent(preferences);
  });

  // Apri Modale Personalizza
  btnCustomize.addEventListener('click', function () {
    cookieModal.style.display = 'flex';
  });

  // Chiudi Modale
  modalClose.addEventListener('click', function () {
    cookieModal.style.display = 'none';
  });

  // Salva Preferenze dalla Modale
  btnSavePreferences.addEventListener('click', function () {
    const preferences = {
      necessary: true,
      analytics: chkAnalytics.checked,
      marketing: chkMarketing.checked
    };
    saveConsent(preferences);
    cookieModal.style.display = 'none';
  });

  // Riapri banner/modal dal pulsante galleggiante
  cookieTrigger.addEventListener('click', function () {
    const current = JSON.parse(localStorage.getItem('cookie_consent_preferences')) || { analytics: false, marketing: false };
    chkAnalytics.checked = current.analytics;
    chkMarketing.checked = current.marketing;
    cookieModal.style.display = 'flex';
  });

  // Funzione per salvare le scelte
  function saveConsent(preferences) {
    localStorage.setItem('cookie_consent_preferences', JSON.stringify(preferences));
    cookieBanner.style.display = 'none';
    applyConsent(preferences);
  }

  // Funzione per attivare/disattivare script di tracciamento
  function applyConsent(preferences) {
    if (preferences.analytics) {
      console.log('Attivazione cookie analitici (es. Google Analytics)');
      // Inserisci qui lo script di Google Analytics o simili
    }
    if (preferences.marketing) {
      console.log('Attivazione cookie di marketing (es. Meta Pixel)');
      // Inserisci qui lo script del Meta Pixel / Google Ads
    }
  }
});