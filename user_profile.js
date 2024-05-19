// Simulated user profile data
let userProfile = {
    name: "Mauli Hamad",
    contributions: 10,
    tokens: 500,
    marketCap: 1000000,
    marketValue: 5000
};

document.addEventListener("DOMContentLoaded", function() {
    // Display user profile data
    document.querySelector(".user-profile .user-info h2").innerText = userProfile.name;
    document.getElementById("userContributions").innerText = userProfile.contributions;
    document.getElementById("userTokens").innerText = userProfile.tokens;
    document.getElementById("marketCap").innerText = userProfile.marketCap;
    document.getElementById("marketValue").innerText = userProfile.marketValue;
});
