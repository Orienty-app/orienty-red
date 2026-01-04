const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const CONFIG = [
    {
        id: 'web',
        name: 'Site Web (orienty.fr)',
        url: 'https://orienty.fr',
        icon: '🌐',
        displayUrl: 'https://orienty.fr'
    },
    {
        id: 'api',
        name: 'Base de Données (Supabase)',
        url: 'https://supabase.com', 
        icon: '⚡',
        displayUrl: 'Supabase EU',
    }
];

const STATUS_FILE = path.join(__dirname, '../status.json');

// --- FONCTION DE PING ---
async function checkService(service) {
    if (!service.url) {
        console.warn(`⚠️ URL manquante pour ${service.name} (Vérifie tes secrets GitHub)`);
        return 0; // Considéré comme Down si pas de config
    }

    try {
        console.log(`🔍 Checking ${service.name}...`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s max

        const headers = {};
        if (service.apiKey) headers['apikey'] = service.apiKey;

        const res = await fetch(service.url, { 
            method: 'GET', 
            headers: headers,
            signal: controller.signal 
        });
        clearTimeout(timeoutId);

        // LOGIQUE DE SUCCÈS :
        // 2xx = OK
        // 401/403 = Non autorisé MAIS le serveur répond (donc il est UP)
        if (res.ok || res.status === 401 || res.status === 403) {
            console.log(`✅ ${service.name} est UP (Code: ${res.status})`);
            return 1;
        } else {
            console.error(`❌ ${service.name} erreur HTTP (Code: ${res.status})`);
            return 0; // Down
        }
    } catch (error) {
        console.error(`❌ ${service.name} est DOWN (Erreur: ${error.message})`);
        return 0; // Down (Timeout ou DNS)
    }
}

// --- MAIN ---
async function run() {
    // 1. Chargement ou Création du fichier JSON
    let data;
    try {
        data = JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
    } catch (e) {
        console.log("⚠️ status.json introuvable, création d'un nouveau fichier.");
        data = { 
            lastUpdated: new Date().toISOString(), 
            maintenance: { active: false, title: "", message: "" },
            services: [] 
        };
    }

    // 2. Vérification de chaque service
    const newServices = [];
    
    for (const config of CONFIG) {
        // Récupérer l'ancien état pour garder l'historique
        const existing = data.services.find(s => s.id === config.id) || { history: [] };
        
        // TEST RÉEL
        const statusVal = await checkService(config);

        // Mise à jour de l'historique (Max 40 points = 5 jours à raison d'un check toutes les 3h)
        const newHistory = [...(existing.history || [])];
        newHistory.push(statusVal);
        if (newHistory.length > 40) newHistory.shift();

        // Calcul Uptime
        const okCount = newHistory.filter(x => x === 1).length;
        const uptimePercent = Math.floor((okCount / newHistory.length) * 100);

        newServices.push({
            id: config.id,
            name: config.name,
            displayUrl: config.displayUrl,
            icon: config.icon,
            status: statusVal === 1 ? 'ok' : 'error',
            uptime: `${uptimePercent}%`,
            history: newHistory
        });
    }

    // 3. Sauvegarde
    data.services = newServices;
    data.lastUpdated = new Date().toISOString();

    fs.writeFileSync(STATUS_FILE, JSON.stringify(data, null, 2));
    console.log("💾 status.json mis à jour avec succès.");
}

run();