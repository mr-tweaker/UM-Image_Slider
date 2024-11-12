# UM-Image Slider

A dynamic and interactive image gallery with a 3D rotation effect, built using HTML, CSS, and JavaScript. The project features a stylish landing page with animated text and a smooth-scrolling image gallery.

🌐 [Live Demo](https://mr-tweaker.github.io/UM-Image_Slider/)

## Features

- 3D rotating image gallery with smooth transitions
- Automatic rotation with manual controls
- Responsive design that works across different screen sizes
- Animated text carousel displaying multiple roles/titles
- Preloader animation for better user experience
- Smooth scroll reveal animations
- Modern UI with a dark theme

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/mr-tweaker/UM-Image_Slider.git
   ```

2. Navigate to the project directory:
   ```bash
   cd UM-Image_Slider
   ```

3. Add your images to the `images` folder (supported formats: jpg, png)
   - Name them sequentially (image1.jpg, image2.jpg, etc.)
   - Recommended image size: 400x400px for optimal display

4. Open `index.html` in a web browser to view the gallery

## Usage

### Gallery Controls
- Click "Next" to rotate the gallery clockwise
- Click "Prev" to rotate the gallery counter-clockwise
- The gallery automatically rotates every 3 seconds
- Hover over images to see a subtle zoom effect

### Customization

To modify the rotating text carousel, edit the `careers` array in `script.js`:
```javascript
const careers = ["YouTuber", "Web Developer", "Student", "Tech Enthusiast"];
```

To adjust the rotation speed, modify the timeout value in `script.js`:
```javascript
setTimeout(() => {
  x = x - 45;
  updateGallery();
}, 3000); // Change 3000 to your desired milliseconds
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Permanent Marker)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.
