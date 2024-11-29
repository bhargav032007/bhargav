const diseases = {
    "leaf spot": {
        symptoms: ["brown spots", "yellow leaves"],
        cure: "Apply fungicide and remove affected leaves. Improve air circulation around plants."
    },
    "powdery mildew": {
        symptoms: ["white powdery spots", "curled leaves"],
        cure: "Apply neem oil or a suitable fungicide. Reduce humidity around plants."
    },
    "root rot": {
        symptoms: ["wilting", "yellowing leaves", "stunted growth"],
        cure: "Improve drainage, reduce watering, and apply a fungicide specifically for root rot."
    },
    "blight": {
        symptoms: ["water-soaked spots", "rapid wilting", "dark stems"],
        cure: "Remove infected plants, apply copper-based fungicide, and practice crop rotation."
    },
    "Rust": {
        symptoms: ["brown pustules", "leaf yellowing", "premature dropping"],
        cure: "Prune and destroy infected leaves,Apply sulfur-based fungicides,Avoid wet foliage by watering early in the day."
    },
    "Anthracnose": {
        symptoms: ["sunken lesions on fruits", "Dark fruit-bearing"],
        cure: "Prune affected areas,Use resistant plant varieties,Apply fungicides containing chlorothalonil or copper."
    },
    "Verticillium Wilt": {
        symptoms: ["wilting of leaves", "darken stems"],
        cure: "Remove and destroy infected plants,Solarize soil to kill pathogens,Use resistant plant varieties."
    },
    "Downy Mildew": {
        symptoms: ["Yellow spots on leaves", "purple mold on leaf"],
        cure: "Improve air circulation,Apply fungicides like phosphonates or copper-based sprays,Water at the base of plants."
    },
    "Canker": {
        symptoms: ["dead areas on stems", "cracking bark", "dieback"],
        cure: "Prune affected areas during dry weather,Use fungicides on susceptible trees or shrubs."
    },
    "Sooty Mold": {
        symptoms: ["sooty coating on leaves", "honeydew from pests"],
        cure: "Control the pest infestation (e.g., use insecticidal soap or neem oil),Wash affected leaves with soapy water."
    },
    "Botrytis": {
        symptoms: ["Fuzzy gray mold on flowers", "rotting tissue"],
        cure: "Remove infected plant parts,Improve air circulation and reduce humidity,Apply fungicides like captan or iprodione."
    },
};
document.getElementById('symptom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
    const symptomsList = symptomsInput.split(',').map(s => s.trim());
    
    let bestMatch = null;
    let maxMatchCount = 0;

    for (const [disease, info] of Object.entries(diseases)) {
        const matchCount = info.symptoms.filter(s => symptomsList.includes(s)).length;
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestMatch = { disease, ...info };
        }
    }

    const resultsDiv = document.getElementById('results');
    if (bestMatch) {
        resultsDiv.innerHTML = `
            <h2>Possible Disease: ${bestMatch.disease}</h2>
            <p><strong>Symptoms:</strong> ${bestMatch.symptoms.join(', ')}</p>
            <p><strong>Recommended Cure:</strong> ${bestMatch.cure}</p>
            <p><em>Note: This is a simplified diagnosis. For accurate results, please consult with a professional agronomist or plant pathologist.</em></p>
        `;
    } else {
        resultsDiv.innerHTML = `
            <p>No matching disease found. Please check your symptoms or consult with a professional agronomist for more accurate diagnosis.</p>
        `;
    }
});