const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
  
    const handleLinkClick = (page) => {
      setCurrentPage(page);
    };
  
    const renderHome = () => {
      return (
        `
        <!-- Services Section -->
        <section id="services">
          <h2>Our Services</h2>
          <div class="services-grid">
            <!-- Lawn Mowing -->
            <!-- ... (rest of the services on the homepage) ... -->
          </div>
        </section>
        `
      );
    };
  
    const renderServices = () => {
      return `
        <!-- Services Page -->
        <div id="services">
          <h1>Our Services</h1>
          <div class="services-grid">
            <!-- Lawn Mowing -->
            <!-- ... (rest of the services on the Services page) ... -->
          </div>
        </div>
      `;
    };
  
    const renderAbout = () => {
      return `
        <!-- About Us Section -->
        <section id="about">
          <h2>About Us</h2>
          <div class="about-content">
            <p>Introduce your landscaping company, its mission, and core values here.</p>
            <!-- Add images of your team members here -->
          </div>
        </section>
      `;
    };
  
    const renderGallery = () => {
      return `
        <!-- Gallery Section -->
        <section id="gallery">
          <h2>Gallery</h2>
          <div class="gallery-grid">
            <!-- Showcase images of past landscaping projects -->
            <!-- Add more images of your projects -->
          </div>
        </section>
      `;
    };
  
    return `
      <div class="App">
        <!-- Header -->
        <header>
          <div class="logo">A ➡️ Z Landscaping</div>
          <nav>
            <ul>
              <!-- Link to the homepage -->
              <li>
                <button onclick="handleLinkClick('home')">Home</button>
              </li>
  
              <!-- Link to the Services page -->
              <li>
                <button onclick="handleLinkClick('services')">Services</button>
              </li>
  
              <!-- Link to the About Us section on the homepage -->
              <li>
                <button onclick="handleLinkClick('about')">About Us</button>
              </li>
  
              <!-- Link to the Gallery section on the homepage -->
              <li>
                <button onclick="handleLinkClick('gallery')">Gallery</button>
              </li>
  
              <!-- Link to the Contact section on the homepage -->
              <li>
                <button onclick="handleLinkClick('contact')">Contact</button>
              </li>
            </ul>
          </nav>
        </header>
  
        <!-- Hero Section (Optional) -->
        <section class="hero">
          <!-- Add your hero image or captivating background here -->
        </section>
  
        <!-- Conditionally render sections based on the currentPage state -->
        ${currentPage === 'home' ? renderHome() : ''}
        ${currentPage === 'services' ? renderServices() : ''}
        ${currentPage === 'about' ? renderAbout() : ''}
        ${currentPage === 'gallery' ? renderGallery() : ''}
  
        <!-- Testimonials Section -->
        <!-- ... (rest of the code remains unchanged) ... -->
  
        <!-- Contact Section -->
        <!-- ... (rest of the code remains unchanged) ... -->
  
        <!-- Footer -->
        <footer>
          <!-- Add footer content here -->
          <p>© ${new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    `;
  };
  
  document.getElementById('app').innerHTML = App();
  