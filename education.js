/* Show More and Show Less */
let showMoreBtn = document.getElementById("showMoreBtn");
let moreDetails = document.getElementById("moreDetails");
showMoreBtn.addEventListener("click", function () {
    if (moreDetails.style.display === "block") {
        moreDetails.style.display = "none";
        showMoreBtn.textContent = "Show More";
    } else {
        moreDetails.style.display = "block";
        showMoreBtn.textContent = "Show Less";
    }
});
