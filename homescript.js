document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const breadcrumbLinks = document.querySelectorAll(".breadcrumb a");

    // Function to show the selected section and hide others
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Add click event listeners to breadcrumb links
    breadcrumbLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            showSection(index);
            breadcrumbLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active'); // Highlight the active link
        });
    });

    // Show the first section by default
    showSection(0);
});




document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Open the first accordion item by default
    accordionItems[0].classList.add('active');
    accordionItems[0].querySelector('.accordion-content').style.display = 'block';
    accordionItems[0].querySelector('.accordion-symbol').textContent = '-'; // Change symbol to indicate open state for the first item

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const symbol = item.querySelector('.accordion-symbol');

        header.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');

            // Toggle display of accordion content
            const content = item.querySelector('.accordion-content');
            if (isActive) {
                content.style.display = 'block';
                symbol.textContent = '-'; // Change symbol to indicate open state
            } else {
                content.style.display = 'none';
                symbol.textContent = '+'; // Change symbol to indicate closed state
            }
        });

        // Set initial symbol color to black
        symbol.style.color = 'black';
    });
});









const primaryColorInput = document.getElementById('primary-color');
const secondaryColorInput = document.getElementById('secondary-color');
const primaryProfileTextColorInput = document.getElementById('primary-profile-text-color');
const secondaryProfileTextColorInput = document.getElementById('secondary-profile-text-color');
const primaryTextColorInput = document.getElementById('primary-text-color');
const secondaryTextColorInput = document.getElementById('secondary-text-color');
const previewText = document.querySelector('.preview-content p');

function updatePreview() {
  const primaryColor = primaryColorInput.value || primaryColorInput.placeholder;
  const secondaryColor = secondaryColorInput.value || secondaryColorInput.placeholder;
  const primaryProfileTextColor = primaryProfileTextColorInput.value || primaryProfileTextColorInput.placeholder;
  const secondaryProfileTextColor = secondaryProfileTextColorInput.value || secondaryProfileTextColorInput.placeholder;
  const primaryTextColor = primaryTextColorInput.value || primaryTextColorInput.placeholder;
  const secondaryTextColor = secondaryTextColorInput.value || secondaryTextColorInput.placeholder;

  // Validate color format (optional)
  if (!isValidHexColor(primaryColor) || !isValidHexColor(secondaryColor) ||
      !isValidHexColor(primaryProfileTextColor) || !isValidHexColor(secondaryProfileTextColor) ||
      !isValidHexColor(primaryTextColor) || !isValidHexColor(secondaryTextColor)) {
    return; // Optionally handle invalid input
  }

  previewText.style.color = primaryTextColor;
  previewText.style.backgroundColor = secondaryColor;
  previewText.style.borderColor = primaryColor;
  previewText.style.borderStyle = 'solid';
  previewText.style.borderWidth = '2px';
}

function isValidHexColor(color) {
  return /^#[0-9A-F]{6}$/i.test(color);
}

primaryColorInput.addEventListener('input', updatePreview);
secondaryColorInput.addEventListener('input', updatePreview);
primaryProfileTextColorInput.addEventListener('input', updatePreview);
secondaryProfileTextColorInput.addEventListener('input', updatePreview);
primaryTextColorInput.addEventListener('input', updatePreview);
secondaryTextColorInput.addEventListener('input', updatePreview);

// Initial update on page load
updatePreview();
