const header = `
                        <nav>
                          <a href="index.html" class="logo"><strong>AS</strong></a>                          
                          <ul class="nav-links">
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="#skills">Skills</a>
                            </li>
                            <li>
                              <a href="#cheatsheets">Cheatsheets</a>
                            </li>
                            <li>
                              <a href="recursos.html">Resources</a>
                            </li>
                            <li>
                              <a href="contacto.html">Contact</a>
                            </li>
                            <li class="weather-item">
                              <div id="weather"></div>
                            </li>
                          </ul>
                          <button class="theme-toggle" id="theme-toggle">
                            <span class="sun">🔆</span>
                            <span class="moon hidden"> ⏾</span>
                          </button>
                          <div class="hamburger" id="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </nav>`;
const footer = `
                            <nav>
                              <p>&copy Antony Alonso Salas Rodriguez - Backend Developer</p>
                            </nav>`;

export { header, footer };