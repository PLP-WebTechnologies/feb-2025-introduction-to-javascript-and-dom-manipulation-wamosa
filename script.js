// Function to change text content
function changeGreeting(newText) {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = newText;
    }
}

// Call the function to change the greeting after a delay
setTimeout(() => {
    changeGreeting('Welcome to the dynamic page!');
}, 2000); // Change after 2 seconds

// Function to modify CSS styles
function applyStyles(elementId, styles) {
    const element = document.getElementById(elementId);
    if (element) {
        for (const property in styles) {
            if (styles.hasOwnProperty(property)) {
                element.style[property] = styles[property];
            }
        }
    }
}

// Apply some styles to the 'style-me' div
applyStyles('style-me', {
    backgroundColor: '#ffe0b2', // Light orange
    color: '#333',
    fontWeight: 'bold',
    padding: '15px',
    borderRadius: '5px'
});

// Function to add or remove an element on button click
const toggleButton = document.getElementById('toggleButton');
const elementContainer = document.getElementById('elementContainer');
let newElementAdded = false;
let addedElement;

toggleButton.addEventListener('click', () => {
    if (!newElementAdded) {
        // Add a new element
        addedElement = document.createElement('div');
        addedElement.classList.add('new-element');
        addedElement.textContent = 'This element was added dynamically!';
        elementContainer.appendChild(addedElement);
        toggleButton.textContent = 'Remove Element';
        newElementAdded = true;
    } else {
        // Remove the added element
        if (addedElement && elementContainer.contains(addedElement)) {
            elementContainer.removeChild(addedElement);
        }
        toggleButton.textContent = 'Add Element';
        newElementAdded = false;
    }
});
