document.addEventListener('DOMContentLoaded', function () {
    /* footer script */
    const Year = new Date().getFullYear();
    const YearSpan = document.getElementById('currentyear');

    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (YearSpan) {
        YearSpan.textContent = Year;
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }

});

//formula to calculate the windchill

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {  // degree celsius and km/h 
        const windChill =
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); // Rounded to one decimal
    }
    else
    {
        return "N/A"; // the conditions are not met, then display "N/A", which means "not applicable"
    }

}

const result = calculateWindChill(22, 5);
if (windChill) {
    windChill.textContent = result;
}