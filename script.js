document.addEventListener("DOMContentLoaded", () => {
    const serverSelect = document.getElementById("serverSelect");
    const form = document.getElementById("monetizationForm");

    // 20 सर्वर्स की लिस्ट लूप के ज़रिए जनरेट करना
    for (let i = 1; i <= 20; i++) {
        let option = document.createElement("option");
        option.value = `Server ${i}`;
        option.text = `Super Fast Server 0${i}`;
        serverSelect.appendChild(option);
    }

    // फॉर्म सबमिट (Pay Now) होने पर क्या होगा
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // पेज को रीफ्रेश होने से रोकना

        const videoLink = document.getElementById("videoLink").value;
        const selectedServer = serverSelect.value;

        // चूँकि अभी असली पेमेंट गेटवे नहीं है, हम सिर्फ एक मैसेज दिखाएंगे
        alert(`शानदार!\n\nवीडियो: ${videoLink}\nसर्वर: ${selectedServer}\n\n₹50 के पेमेंट के लिए आपको पेमेंट गेटवे पर रीडायरेक्ट किया जा रहा है... (Demo)`);
        
        // फॉर्म क्लियर करना
        form.reset();
    });
});
