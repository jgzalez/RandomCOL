const viewer = new Cesium.Viewer("cesiumContainer", {
    sceneMode: Cesium.SceneMode.SCENE3D,
    infobox: true,      // Keep the infobox
    timeline: false,    // Remove the timeline
    animation: true,    // Keep the animation controller
    navigationHelpButton: false, // Remove the navigation help button
    navigationInstructionsInitiallyVisible: false,
    baseLayerPicker: false, // Remove the base layer picker
    geocoder: false,      // Remove the geocoder
    homeButton: false,    // Remove the home button
    sceneModePicker: false, // Remove the scene mode picker
    fullscreenButton: true, // Remove the fullscreen button
    vrButton: false,       // Remove the VR button
    selectionIndicator: false // Remove the selection indicator


});



// Define refined waypoints for the ship's journey avoiding land.
const waypoints = [
{
    "name": "Salida",
    "longitude": -150.8583,
    "latitude": 19.3069,
    "description": "<div><h1>Bienvenidos al Viaje Gastronómico de Cruise On Land!</h1><p>Naveguemos a través del mundo en búsqueda de las delicias y algunos de los platos de los destinos gastronómicos más importantes y representativos del planeta.</p><p>Acompáñenos a este viaje culinario, donde su paladar podrá degustar los sabores y delicias de cada esquina del mundo.</p></div>",
    "type": "Interest"
},

{
    "name": "Hawaii, USA",
    "longitude": -157.8583,
    "latitude": 21.3069,
    "description": "<div><h1>Hawaii:</h1><p>Un vibrante mosaico de sabores, influenciada por las culturas polinesia, asiática y americana, destacando platos como el<strong><em> poke</em></strong>, el <strong><em>luau pig</em></strong>, y el<strong><em> loco moco</em></strong>, todos enmarcados por el exótico escenario de sus islas.</p><ol><li>Deleite su paladar en nuestro restaurante <strong class='ql-size-large'><em>Pacific Rim</em></strong>. Una exótica cocina mixta que fusiona influencias<em> francesas, asiáticas y polinesias.</em></li><li>Visite el <strong class='ql-size-large'><em>Bar Tiki</em></strong>, donde encontrará una amplia diversidad de refrescantes coctéles tropicales.</li></ol></div>",
    "type": "Interest"
},
    { name: "Pacific Point 1231", longitude: 190, latitude: 25, description: "You've reached Pacific Point 1, navigating through the vast Pacific Ocean.", type: "Road" },

      { name: "Pacific Point 12321", longitude: 179, latitude: 25, description: "You've reached Pacific Point 1, navigating through the vast Pacific Ocean.", type: "Road" },

    { name: "Pacific Point 1", longitude: 170, latitude: 25, description: "You've reached Pacific Point 1, navigating through the vast Pacific Ocean.", type: "Road" },
    {
  name: "Intermediate Point 1",
  longitude: 165,
  latitude: 27.5,
  description: "Midway checkpoint between Pacific Point 1 and Pacific Point 2, smoothing the journey across the Pacific.",
  type: "Road"
},
  { name: "Pacific Point 2", longitude: 160, latitude: 30, description: "This is Pacific Point 2, closer to the Asian continent.", type: "Road" },
    {
  name: "Intermediate Point 2",
  longitude: 155,
  latitude: 32.5,
  description: "Midway checkpoint between Pacific Point 2 and Pacific Point 3, marking the continued journey across the Pacific towards Asia.",
  type: "Road"
},
  { name: "Pacific Point 3", longitude: 150, latitude: 35, description: "Approaching Japan: Pacific Point 3 achieved.", type: "Road" },

  {
    "name": "Japan",
    "longitude": 140.6503,
    "latitude": 35.6762,
    "description": "<div><h1>Japón:</h1><p>Una elegante expresión de temporada y equilibrio, caracterizada por su <strong><em>sushi</em></strong>, <strong><em>sashimi</em></strong>, <strong><em>ramen</em></strong>, y <strong><em>tempura</em></strong>, con un profundo respeto por la frescura de los ingredientes y la estética en su presentación.</p><ol><li>Conozca la comida tradicional japonesa en nuestro menú <em>YAKUSHIMA:</em> donde encontrará los principales platos del país del sol naciente.</li></ol></div>",
    "type": "Interest"
  },
    
    { name: "Offshore Point 2", longitude: 136.5, latitude: 33.0, description: "Navigating through the Pacific, southwest of Izu Peninsula.", type: "Road" },
    { name: "Offshore Point 3", longitude: 134.0, latitude: 31.5, description: "Approaching the Kii Peninsula.", type: "Road" },
    { name: "Offshore Point 4", longitude: 132.0, latitude: 30.0, description: "Skirting the southern coast of Wakayama Prefecture.", type: "Road" },
    { name: "Offshore Point 5", longitude: 129.0, latitude: 29.0, description: "Passing south of Kyushu Island.", type: "Road" },
    { name: "Offshore Point 6", longitude: 126.0, latitude: 28.0, description: "Crossing the East China Sea.", type: "Road" },
    { name: "Offshore Point 7", longitude: 124.0, latitude: 30.0, description: "Navigating through international waters.", type: "Road" },
{
    "name": "Shanghai, China",
    "longitude": 122.4737,
    "latitude": 31.2304,
    "description": "<div><h1>China:</h1><p>Un vasto panorama de sabores y técnicas regionales, desde el <em>dim sum</em> cantonés hasta el picante <em>sichuan</em>, destacando la importancia del equilibrio entre color, sabor y textura en cada plato.</p><p>Disfrute de platos como:</p><ul><li>Dim Sum</li><li>Carnes Sichuán</li><li>Pollo Kung Pao</li></ul><p>Entre otras delicias de esta potencia culinaria y gastronómica.</p></div>",
    "type": "Interest"
},
  
      { name: "Offshore Point 9", longitude: 123.0, latitude: 28.0, description: "Exiting the Yangtze River delta into the East China Sea.", type: "Road" },
    { name: "Offshore Point 10", longitude: 120.0, latitude: 25.0, description: "Bypassing the Taiwanese coast, moving into the northern part of the South China Sea.", type: "Road" },
    { name: "Offshore Point 11", longitude: 116.0, latitude: 20.0, description: "Navigating through the open waters of the South China Sea, east of Hainan.", type: "Road" },
    { name: "Offshore Point 12", longitude: 114.0, latitude: 15.0, description: "Passing by the Paracel Islands, maintaining a course in international waters.", type: "Road" },
    { name: "Offshore Point 13", longitude: 111.0, latitude: 11.0, description: "Skirting the northeastern coasts of Vietnam.", type: "Road" },
    { name: "Offshore Point 14", longitude: 107.0, latitude: 9.0, description: "Crossing south of Vietnam, approaching the Gulf of Thailand.", type: "Road" },
    { name: "Offshore Point 15", longitude: 104.0, latitude: 8.0, description: "Entering the Gulf of Thailand, steering clear of the Cambodian coast.", type: "Road" },
    { name: "Offshore Point 16", longitude: 101.0, latitude: 9.0, description: "Navigating the northern part of the Gulf of Thailand, approaching Thai waters.", type: "Road" },
{
    "name": "Laem Chabang Port, Thailand",
    "longitude": 100.8805,
    "latitude": 13.0989,
    "description": "<div><h1>Tailandia:</h1><p>La gastronomía de Tailandia es una explosión de sabores equilibrados entre lo <em>dulce</em>, <em>ácido</em>, <em>salado</em> y <em>picante</em>, destacando platos como el <em>pad thai</em>, <em>curry verde</em> y <em>tom yum goong</em>, en una cocina que celebra la frescura y la armonía de ingredientes.</p></div>",
    "type": "Interest"
},
  
    // Corrected waypoints from Thailand to Malaysia
  { name: "Offshore Point 17", longitude: 105.2, latitude: 5.5, description: "Heading southwest, moving away from the Gulf of Thailand into open sea.", type: "Road" },
    { name: "Offshore Point 19", longitude: 105.0, latitude: 1.0, description: "Further into the Andaman Sea, avoiding landmasses.", type: "Road" },
    { name: "Offshore Point 21", longitude: 103.0, latitude: 1.2, description: "Approaching the northern tip of Sumatra, continuing on a clear maritime path.", type: "Road" },
{
    "name": "Port Klang, Malaysia",
    "longitude": 101.3929,
    "latitude": 3.0317,
    "description": "<div><h1>Malasia:</h1><p>Un rico tapiz de sabores intensos y variados, con platos como el <em>rendang</em>, <em>nasi goreng</em>, y <em>satay</em>, reflejando una diversidad cultural a través de especias exóticas y técnicas culinarias tradicionales.</p></div>",
    "type": "Interest"
},
    
  // Waypoints from China to India
    { name: "Offshore Point 24", longitude: 98.0, latitude: 6.0, description: "Approaching the northern tip of Sumatra, continuing on a clear maritime path.", type: "Road" },
    { name: "Offshore Point 27", longitude: 92.0, latitude: 9.0, description: "Sailing across the northern part of the Andaman Sea into the Bay of Bengal.", type: "Road" },
    { name: "Offshore Point 28", longitude: 90.0, latitude: 13.0, description: "Continuing journey through the Bay of Bengal, approaching the Indian coast.", type: "Road" },
    { name: "Offshore Point 29", longitude: 88.0, latitude: 15.0, description: "Navigating the central Bay of Bengal, maintaining a course towards Chennai.", type: "Road" },
    { name: "Offshore Point 30", longitude: 86.0, latitude: 17.0, description: "Approaching the eastern coast of India, preparing for arrival at Chennai.", type: "Road" },
{
    "name": "Chennai, India",
    "longitude": 80.2871,
    "latitude": 13.0827,
    "description": "<div><h1>India:</h1><p>Un mosaico vibrante de <em>especias y aromas</em>, con platos como <strong><em>curry</em></strong>, <strong><em>biryani</em></strong>, y <strong><em>masala dosa</em></strong>, reflejando una diversidad regional y el arte de combinar especias en recetas que alimentan tanto el cuerpo como el alma.</p></div>",
    "type": "Interest"
},
  
  
     { name: "Offshore Point 31", longitude: 79.0, latitude: 9.0, description: "Leaving the Bay of Bengal, rounding the Indian Peninsula.", type: "Road" },
    { name: "Offshore Point 32", longitude: 76.0, latitude: 7.0, description: "Passing by the southern tip of India, navigating near Kanyakumari.", type: "Road" },
    { name: "Offshore Point 33", longitude: 72.0, latitude: 8.0, description: "Entering the Arabian Sea, west of the Maldives.", type: "Road" },
    { name: "Offshore Point 34", longitude: 70.0, latitude: 12.0, description: "Sailing northwest, approaching the Indian west coast.", type: "Road" },
    { name: "Offshore Point 35", longitude: 68.0, latitude: 15.0, description: "Moving along the western coast of India, passing Mumbai.", type: "Road" },
    { name: "Offshore Point 36", longitude: 65.0, latitude: 20.0, description: "Continuing through the Arabian Sea, clear of the Indian coast.", type: "Road" },
    { name: "Offshore Point 37", longitude: 60.0, latitude: 23.0, description: "Approaching the Arabian Peninsula, navigating towards the Strait of Hormuz.", type: "Road" },
    { name: "Offshore Point 38", longitude: 57.0, latitude: 25.0, description: "Navigating the Strait of Hormuz, between Oman and Iran.", type: "Road" },
{
    "name": "Middle East",
    "longitude": 57,
    "latitude": 25.2048,
    "description": "<div><h1>Medio Oriente:</h1><p>La gastronomía del Medio Oriente es un festín de sabores ricos y texturas variadas, destacando platos como:</p><ol><li>El Hummus</li><li>Los Kebabs</li><li>El Falafel</li></ol><p>En una tradición culinaria que celebra el uso generoso de especias y hierbas, y la importancia de compartir la comida.</p></div>",
    "type": "Interest"
},
    // Waypoints from Middle East to Italy
      { name: "Offshore Point 31", longitude: 57.0, latitude: 25.0, description: "Exiting the Arabian Gulf, entering the Gulf of Oman.", type: "Road" },
    { name: "Offshore Point 39", longitude: 60.0, latitude: 23.0, description: "Leaving the Persian Gulf, entering the Gulf of Oman.", type: "Road" },
    
  { name: "Offshore Point 42", longitude: 62.0, latitude: 21.0, description: "Passing by the southern coast of Iran.", type: "Road" },
      { name: "Offshore Point 40", longitude: 55.0, latitude: 15.0, description: "Navigating along the coast of Oman, heading towards the Arabian Sea.", type: "Road" },
      { name: "Offshore Point 40", longitude: 50.0, latitude: 13.0, description: "Navigating along the coast of Oman, heading towards the Arabian Sea.", type: "Road" },

  { name: "Offshore Point 442", longitude: 45.0, latitude: 12.0, description: "Entering the Gulf of Aden, between Yemen and Djibouti.", type: "Road" },

    { name: "Offshore Point 45", longitude: 42.0, latitude: 14.7, description: "Sailing westward through the Bab-el-Mandeb Strait into the Red Sea.", type: "Road" },
    { name: "Offshore Point 46", longitude: 38.0, latitude: 21.0, description: "Navigating the Red Sea, heading towards the Suez Canal.", type: "Road" },
    { name: "Suez Canal Entrance", longitude: 32.532, latitude: 29.947, description: "Approaching the Suez Canal from the Red Sea.", type: "Road" },
    { name: "Suez Canal Exit2", longitude: 30.4, latitude: 33, description: "Exiting the Suez Canal, entering the Mediterranean Sea.", type: "Road" },

    // Waypoints from Suez Canal to Italy
    { name: "Offshore Point 48", longitude: 25.0, latitude: 35.0, description: "Crossing the Mediterranean, north of Libya.", type: "Road" },
    { name: "Offshore Point 51", longitude: 17.0, latitude: 33.0, description: "Skirting the eastern coast of Italy.", type: "Road" },
    { name: "Offshore Point 401", longitude: 14.0, latitude: 35.0, description: "Approaching the southern tip of Italy, preparing for the final leg to Genoa.", type: "Road" },
{
    "name": "Genoa, Italy",
    "longitude": 8.9463,
    "latitude": 44.4056,
    "description": "<div><h1>Italia:</h1><p>La gastronomía de Italia es una celebración del amor por la comida, con platos icónicos como la <strong><em>pasta, pizza, y risotto</em></strong>, destacando la importancia de ingredientes frescos y locales, en una cocina que equilibra la simplicidad con el arte culinario.</p></div>",
    "type": "Interest"
},
    { name: "Offshore Point 411", longitude: 8.0, latitude: 42.0, description: "Navigating past the northwestern coast of Italy.", type: "Road" },
    { name: "Offshore Point 421", longitude: 5.0, latitude: 40.0, description: "Approaching the French Riviera, near Nice and Monaco.", type: "Road" },
    { name: "Offshore Point 431", longitude: 3.0, latitude: 39.0, description: "Passing by the Balearic Islands in the western Mediterranean.", type: "Road" },
    { name: "Offshore Point 441", longitude: 0.5, latitude: 38.0, description: "Crossing the sea near Valencia, Spain, heading towards the Strait of Gibraltar.", type: "Road" },
    { name: "Offshore Point 451", longitude: -3.0, latitude: 36.0, description: "Entering the Strait of Gibraltar, the gateway between the Mediterranean Sea and the Atlantic Ocean.", type: "Road" },
    { name: "Offshore Point 461", longitude: -9.0, latitude: 36.0, description: "Navigating off the southern coast of Portugal, near the Algarve region.", type: "Road" },
    { name: "Offshore Point 471", longitude: -11.0, latitude: 38.5, description: "Approaching Lisbon, preparing for arrival at the port.", type: "Road" },
{
    "name": "Lisbon, Portugal",
    "longitude": -9.1372,
    "latitude": 38.7080,
    "description": "<div><h1>Portugal:</h1><p>La gastronomía de Portugal es una rica expresión de tradición marítima y rural, destacando platos como el <strong><em>bacalhau</em></strong>, <strong><em>caldo verde</em></strong>, y <strong><em>pasteles de nata</em></strong>, en una cocina que celebra la simplicidad de los ingredientes frescos y la profundidad de los sabores heredados.</p><p>O'Las Bar: Bar Trópical que fusionará las bebidas más relevantes de Portugal y Hawáii.</p></div>",
    "type": "Interest"
},
    { name: "Offshore Point 481", longitude: -11.5, latitude: 38.5, description: "Sailing north along the western coast of Portugal.", type: "Road" },
    { name: "Offshore Point 491", longitude: -9.5, latitude: 41.0, description: "Approaching the northern Portuguese coast, near Porto.", type: "Road" },
{
    "name": "Vigo, Spain",
    "longitude": -8.7226,
    "latitude": 42.2406,
    "description": "<div><h1>España:</h1><p>La gastronomía de España es un vibrante tapiz de sabores regionales, destacando platos como la <strong><em>paella, tapas, y gazpacho</em></strong>, en una cultura culinaria que valora la calidad de los ingredientes, la diversidad de sus recetas y la importancia de compartir la comida en comunidad.</p></div>",
    "type": "Interest"
},
    { name: "Offshore Point 501", longitude: -11.9, latitude: 42.0, description: "Entering Spanish waters, navigating towards Galicia.", type: "Road" },

  { name: "Offshore Point 591", longitude: -8.0, latitude: 44.0, description: "Navigating north along the western coast of France, towards the Bay of Biscay.", type: "Road" },
    { name: "Offshore Point 60", longitude: -6.0, latitude: 46.0, description: "Crossing the Bay of Biscay towards the Brittany coast of France.", type: "Road" },
    { name: "Offshore Point 61", longitude: -6.0, latitude: 48.0, description: "Approaching the entrance to the English Channel, near Brest, France.", type: "Road" },
    { name: "Offshore Point 62", longitude: -2.0, latitude: 50.0, description: "Passing through the English Channel, navigating between England and France.", type: "Road" },
    { name: "Offshore Point 63", longitude: 0.0, latitude: 50.0, description: "Continuing through the English Channel, heading towards the North Sea.", type: "Road" },
    { name: "Offshore Point 64", longitude: 2.0, latitude: 52.0, description: "Entering the North Sea, passing by the southeastern coast of England.", type: "Road" },
    { name: "Offshore Point 65", longitude: 4.0, latitude: 56.0, description: "Navigating the North Sea, parallel to the Netherlands and Denmark.", type: "Road" },
{
    "name": "Hamburg, Germany",
    "longitude": 9.9937,
    "latitude": 53.5511,
    "description": "<div><h1>Alemania:</h1><p>La gastronomía alemana es conocida por su variedad, sabor sustancioso y la influencia de las tradiciones regionales. Destaca por sus porciones generosas y sabores reconfortantes. Cada región tiene sus propias especialidades, lo que contribuye a la diversidad culinaria del país.</p><ul><li>Cervecería Marca COL: Se propone una minifábrica de cerveza donde los clientes pueden degustar distintas cervezas propias fabricadas en la casa COL.</li></ul></div>",
    "type": "Interest"
},
  { name: "Offshore Point 66", longitude: 7.0, latitude: 55.0, description: "Leaving the North Sea, entering the Norwegian Sea.", type: "Road" },
    { name: "Offshore Point 67", longitude: -1.0, latitude: 59.0, description: "Navigating past the northern tip of the British Isles into the open Atlantic.", type: "Road" },
    { name: "Offshore Point 68", longitude: -3.0, latitude: 60.0, description: "Crossing the northern Atlantic, moving between Iceland and the Faroe Islands.", type: "Road" },
    { name: "Offshore Point 69", longitude: -43.0, latitude: 55.0, description: "Mid-Atlantic route, halfway between Europe and North America.", type: "Road" },
    { name: "Offshore Point 70", longitude: -50.0, latitude: 50.0, description: "Approaching Canadian waters, navigating through cooler northern currents.", type: "Road" },
    { name: "Offshore Point 71", longitude: -55.0, latitude: 45.0, description: "Entering the approaches to the Gulf of Saint Lawrence.", type: "Road" },
    { name: "Offshore Point 72", longitude: -60.0, latitude: 44.0, description: "Passing by Sable Island, preparing for the final approach to Halifax.", type: "Road" },
{
    "name": "Halifax, Nova Scotia, Canada",
    "longitude": -63.5752,
    "latitude": 44.6488,
    "description": "<div><h1>Canada:</h1><p>La gastronomía de Canadá es una diversa mezcla de influencias indígenas, francesas, británicas y globales, destacando platos como el <em>poutine, el jarabe de arce,</em> y <em>el salmón ahumado</em>, reflejando la vasta geografía y el mosaico cultural del país.</p></div>",
    "type": "Interest"
},    { name: "Offshore Point 73", longitude: -66.0, latitude: 43.0, description: "Leaving the Canadian coastline, heading towards the eastern seaboard of the USA.", type: "Road" },
    { name: "Offshore Point 74", longitude: -69.0, latitude: 40.0, description: "Passing by the New England coast, avoiding major shipping lanes and obstacles.", type: "Road" },
    { name: "Offshore Point 75", longitude: -72.0, latitude: 37.0, description: "Navigating around the outer banks of North Carolina.", type: "Road" },
    { name: "Offshore Point 76", longitude: -75.0, latitude: 34.0, description: "Skirting past Cape Hatteras, continuing southward along the US East Coast.", type: "Road" },
    { name: "Offshore Point 77", longitude: -77.0, latitude: 31.0, description: "Approaching the Georgia-Florida border, preparing for entry into Florida waters.", type: "Road" },
{
    "name": "Miami, USA",
    "longitude": -80.1918,
    "latitude": 25.7617,
    "description": "<div><h1>Estados Unidos:</h1><p>La gastronomía de Estados Unidos es sumamente diversa y refleja la mezcla de culturas y tradiciones presentes en el país. Destacando platos como <em>la hamburguesa, el barbecue,</em> y <em>la tarta de manzana</em>, en una cultura culinaria que celebra la innovación, la diversidad y el espíritu de fusión.</p></div>",
    "type": "Interest"
},
    { name: "Offshore Point 78", longitude: -81.0, latitude: 25.0, description: "Leaving the Florida Straits, heading into the Gulf of Mexico.", type: "Road" },
    { name: "Offshore Point 79", longitude: -85.0, latitude: 24.0, description: "Navigating the southeastern waters of the Gulf of Mexico.", type: "Road" },
    { name: "Offshore Point 80", longitude: -87.0, latitude: 22.0, description: "Passing west of Cuba, maintaining course through the Gulf.", type: "Road" },
    { name: "Offshore Point 81", longitude: -90.0, latitude: 22.0, description: "Approaching the Yucatan Channel, between Cuba and Mexico.", type: "Road" },
    { name: "Offshore Point 82", longitude: -93.0, latitude: 20.0, description: "Sailing along the southern Gulf of Mexico, near the Yucatan Peninsula.", type: "Road" },
{
    "name": "Veracruz, Mexico",
    "longitude": -96.1342,
    "latitude": 19.1738,
    "description": "<div><h1>Mexico:</h1><p>La gastronomía de México es una rica tapestría de sabores complejos y técnicas ancestrales, destacando platos como el mole, tacos, y el pozole, en una tradición culinaria que honra sus raíces indígenas y españolas, enriquecida por una biodiversidad extraordinaria.</p></div>",
    "type": "Interest"
},
  { name: "Offshore Point 83", longitude: -87.0, latitude: 22.0, description: "Passing west of Cuba, maintaining course through the Gulf.", type: "Road" },
   
{
    "name": "Cartagena, Colombia",
    "longitude": -75.5258,
    "latitude": 10.4028,
    "description": "<div><h1>Colombia:</h1><p>La gastronomía de Colombia es un vibrante reflejo de su diversidad geográfica y cultural, destacando platos como el ajiaco, bandeja paisa, y arepas, en una cocina que combina sabores indígenas, africanos y españoles, celebrando la riqueza de sus ingredientes locales.</p></div>",
    "type": "Interest"
},
  { name: "Offshore Point 91", longitude: -74.0, latitude: 12.0, description: "Navigating southeast along the Caribbean coast of Colombia.", type: "Road" },
    { name: "Offshore Point 92", longitude: -70.0, latitude: 12.0, description: "Passing the Guajira Peninsula, moving towards the open Atlantic waters.", type: "Road" },
    { name: "Offshore Point 93", longitude: -65.0, latitude: 11.0, description: "Approaching the northeastern coast of Venezuela.", type: "Road" },
    { name: "Offshore Point 94", longitude: -60.0, latitude: 9.0, description: "Sailing past the Orinoco River delta, avoiding shallow waters and river outflows.", type: "Road" },
    { name: "Offshore Point 95", longitude: -55.0, latitude: 7.0, description: "Navigating clear of the Amazon River delta and the coastal waters of Guyana.", type: "Road" },
    { name: "Offshore Point 96", longitude: -50.0, latitude: 5, description: "Entering Brazilian waters, moving along the coast of Amapá and Pará.", type: "Road" },
    { name: "Offshore Point 97", longitude: -46.0, latitude: 3.0, description: "Continuing down the northern coast of Brazil, past the state of Maranhão.", type: "Road" },
    { name: "Offshore Point 98", longitude: -42.0, latitude: -0.0, description: "Sailing along the northeastern coast of Brazil, bypassing the states of Piauí and Ceará.", type: "Road" },
    { name: "Offshore Point 99", longitude: -32.0, latitude: -3.0, description: "Passing the easternmost point of South America, Cape São Roque.", type: "Road" },
    { name: "Offshore Point 100", longitude: -33.0, latitude: -7.0, description: "Skirting the coast of Bahia, navigating the South Atlantic currents.", type: "Road" },
    { name: "Offshore Point 101", longitude: -39.0, latitude: -19.0, description: "Approaching the port of Santos, preparing for entry and berthing procedures.", type: "Road" },
{
    "name": "Brazil",
    "longitude": -39.8,
    "latitude": -18.9608,
    "description": "<div><h1>Brazil:</h1><p>La gastronomía de Brasil es un exuberante festín de sabores y texturas, con platos como la feijoada, moqueca, y caipirinha, reflejando la diversidad cultural del país, en una cocina que vibra con la alegría y el color de su gente.</p><ul><li>L'Samba Rodizio: El asador será colocado en un área del restaurante a la vista del comensal protegido con cristal para evitar la fuerte filtración de olores. Además, montará un salad bar para self-service.</li></ul></div>",
    "type": "Interest"
},
    { name: "Offshore Point 103", longitude: -39.0, latitude: -19.0, description: "Approaching the port of Santos, preparing for entry and berthing procedures.", type: "Road" },
    { name: "Offshore Point 104", longitude: -33.0, latitude: -7.0, description: "Skirting the coast of Bahia, navigating the South Atlantic currents.", type: "Road" },
    { name: "Offshore Point 105", longitude: -32.0, latitude: -3.0, description: "Passing the easternmost point of South America, Cape São Roque.", type: "Road" },
    { name: "Offshore Point 106", longitude: -42.0, latitude: -0.0, description: "Sailing along the northeastern coast of Brazil, bypassing the states of Piauí and Ceará.", type: "Road" },
    { name: "Offshore Point 107", longitude: -46.0, latitude: 3.0, description: "Continuing down the northern coast of Brazil, past the state of Maranhão.", type: "Road" },
    { name: "Offshore Point 108", longitude: -50.0, latitude: 5.0, description: "Entering Brazilian waters, moving along the coast of Amapá and Pará.", type: "Road" },
    { name: "Offshore Point 109", longitude: -55.0, latitude: 7.0, description: "Navigating clear of the Amazon River delta and the coastal waters of Guyana.", type: "Road" },
    { name: "Offshore Point 110", longitude: -60.0, latitude: 9.0, description: "Sailing past the Orinoco River delta, avoiding shallow waters and river outflows.", type: "Road" },
    { name: "Offshore Point 111", longitude: -65.0, latitude: 11.0, description: "Approaching the northeastern coast of Venezuela.", type: "Road" },
{
    "name": "Santo Domingo, DR",
    "longitude": -69.7,
    "latitude": 18.4,
    "description": "<div><h1>República Dominicana:</h1><p>La gastronomía de la República Dominicana es un cálido encuentro de influencias taínas, africanas y españolas, destacando platos como el sancocho, mangú, y la bandera dominicana, en una cocina que celebra la abundancia de sus productos tropicales y la tradición de la comida casera y festiva.</p><ul><li>Caribbean Reef -Bar Martini: Disfruta de refrescantes coctéles tropicales en este bar caribeño.</li></ul></div>",
    "type": "Interest"
}

];


let lastNearestWaypoint = null; // This will keep track of the last nearest waypoint

// Create and add the ship model entity.
// Añades el modelo del barco a tu visualización de Cesium
var shipModel = viewer.entities.add({
    name: 'Ship',
    position: Cesium.Cartesian3.fromDegrees(waypoints[0].longitude, waypoints[0].latitude),
    model: {
        uri: 'https://raw.githubusercontent.com/jgzalez/SimulacionRutaCulinariaCOL/main/yatch_II.glb',
        minimumPixelSize: 128,
        maximumScale: 5000
    }
});

// Configuras las propiedades de animación y posición del barco
var positionProperty = new Cesium.SampledPositionProperty();
// Código para configurar positionProperty con muestras...

// Usa CallbackProperty para personalizar la orientación basada en la velocidad y dirección
shipModel.orientation = new Cesium.CallbackProperty(function (time, result) {
    var position = positionProperty.getValue(time);
    var nextPosition = positionProperty.getValue(Cesium.JulianDate.addSeconds(time, 1, new Cesium.JulianDate()));
    if (!position || !nextPosition) return result;
    
    var velocityVector = Cesium.Cartesian3.subtract(nextPosition, position, new Cesium.Cartesian3());
    return Cesium.Transforms.headingPitchRollQuaternion(position, new Cesium.HeadingPitchRoll(
        Cesium.Cartesian3.angleBetween(Cesium.Cartesian3.UNIT_NORTH, velocityVector),
        0,
        0
    ), result);
}, false);

var startTime = Cesium.JulianDate.now();
var stopTime = new Cesium.JulianDate();
var travelTimeHours = waypoints.length * 2; // Adjust based on desired speed and realism.

Cesium.JulianDate.addHours(startTime, travelTimeHours, stopTime);

waypoints.forEach((point, index) => {
    var timeFraction = index / (waypoints.length - 1);
    var time = Cesium.JulianDate.addHours(startTime, travelTimeHours * timeFraction, new Cesium.JulianDate());
    positionProperty.addSample(time, Cesium.Cartesian3.fromDegrees(point.longitude, point.latitude, 0)); // Ensure altitude is 0 for sea level
});

// Assign the animated position and orientation to the ship model.
shipModel.position = positionProperty;
// Set a basic orientation (heading) for the ship based on its path.
shipModel.orientation = new Cesium.VelocityOrientationProperty(positionProperty);

// Additional logic to ensure the camera follows the ship if needed:
// No establezcas directamente el seguimiento aquí: viewer.trackedEntity = shipModel;
// En vez de eso, usa el siguiente código:
// Additional logic to ensure the camera follows the ship if needed:
var baseDistance = 200000; // Horizontal distance from the camera to the ship
var baseHeight = 3000000;    // Height of the camera from the ship, adjust this for a better angle
var startAngle = -Math.PI / 4; // Starting angle for the camera's horizontal position relative to the ship
var angleVariation = Math.PI / 18; // Reduced range of the angle variation for smoother effect

var totalAnimationTime = 600; // Time for one cycle of the angle animation for slower movement
var animationStartTime = viewer.clock.currentTime.secondsOfDay; // The start time of the animation

var lastCameraPosition = null; // Keep track of the last camera position for smoothing
var dampingFactor = 0.009; // Damping factor to smooth out camera movements

viewer.scene.postRender.addEventListener(function () {
    var currentTime = viewer.clock.currentTime.secondsOfDay;
    var elapsedTime = (currentTime - animationStartTime) % totalAnimationTime;
    var anglePhase = elapsedTime / totalAnimationTime;

    // Adjust the current angle for a smoother sweeping effect
    var currentAngle = startAngle + angleVariation * Math.cos(anglePhase * 2 * Math.PI);

    var shipPosition = shipModel.position.getValue(viewer.clock.currentTime);
    if (!shipPosition) return;

    // Calculate the new camera position based on the current ship position
    var transform = Cesium.Transforms.eastNorthUpToFixedFrame(shipPosition);
    var rotation = Cesium.Matrix4.getMatrix3(transform, new Cesium.Matrix3());
    var localEast = Cesium.Matrix3.getColumn(rotation, 0, new Cesium.Cartesian3());
    var localNorth = Cesium.Matrix3.getColumn(rotation, 1, new Cesium.Cartesian3());
    var localUp = Cesium.Matrix3.getColumn(rotation, 2, new Cesium.Cartesian3());

    var northEastMix = Cesium.Cartesian3.add(
        Cesium.Cartesian3.multiplyByScalar(localEast, baseDistance * Math.cos(currentAngle), new Cesium.Cartesian3()),
        Cesium.Cartesian3.multiplyByScalar(localNorth, baseDistance * Math.sin(currentAngle), new Cesium.Cartesian3()),
        new Cesium.Cartesian3()
    );
    var offset = Cesium.Cartesian3.add(
        northEastMix,
        Cesium.Cartesian3.multiplyByScalar(localUp, baseHeight, new Cesium.Cartesian3()),
        new Cesium.Cartesian3()
    );

    var cameraPosition = Cesium.Cartesian3.add(shipPosition, offset, new Cesium.Cartesian3());

    // Apply damping to smooth the transition between camera positions
    if (lastCameraPosition) {
        cameraPosition = Cesium.Cartesian3.lerp(lastCameraPosition, cameraPosition, dampingFactor, new Cesium.Cartesian3());
    }
    lastCameraPosition = cameraPosition;

    viewer.camera.setView({
        destination: cameraPosition,
        orientation: {
            direction: Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(shipPosition, cameraPosition, new Cesium.Cartesian3()), new Cesium.Cartesian3()),
            up: localUp
        }
    });
});



function checkSimulationState() {
    console.log(`Simulation paused: ${!viewer.clock.shouldAnimate}`);
    console.log(`Current simulation time: ${Cesium.JulianDate.toIso8601(viewer.clock.currentTime)}`);
    // If the simulation is paused, halt further checks
    if (!viewer.clock.shouldAnimate) {
        console.log("Simulation is paused. Halting updates.");
        return;
    }
    // Continue with checks if simulation is not paused
    checkWaypointProximityAndSelect();
}

// Instead of directly calling checkWaypointProximityAndSelect, call checkSimulationState
setInterval(checkSimulationState, 1000);
function checkWaypointProximityAndSelect() {
    if (!viewer.clock.shouldAnimate) {
        // If the simulation is paused, do not proceed with proximity checks
        console.log("Simulation is paused. Halting proximity checks.");
        return;
    }

    var shipPosition = shipModel.position.getValue(viewer.clock.currentTime);
    if (!shipPosition) {
        console.log("Current ship position: Undefined");
        return;  // Exit if ship position is undefined
    }

    let nearestDistance = Infinity;
    let nearestWaypoint = null;
    let isInterestPoint = false; // Track whether the nearest waypoint is an interest point

  positionProperty.setInterpolationOptions({
    interpolationDegree: 2, // You can adjust this degree
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation // This algorithm provides smooth paths
});

    // Iterate through each waypoint to find the nearest one
    waypoints.forEach(waypoint => {
        var waypointPosition = Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude);
        var distance = Cesium.Cartesian3.distance(shipPosition, waypointPosition);

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestWaypoint = waypoint;
            isInterestPoint = waypoint.type === "Interest"; // Check if it's an interest point
        }
    });

    // Actions for interest waypoints
    if (nearestWaypoint && nearestDistance < 300000 && lastNearestWaypoint !== nearestWaypoint && isInterestPoint) {
        var waypointEntity = viewer.entities.getById(`waypoint-${nearestWaypoint.name}`);
        if (waypointEntity) {
            console.log(`Changing selected entity to: ${waypointEntity.name}`);
            viewer.selectedEntity = waypointEntity;
            viewer.clock.shouldAnimate = false; // Stop the animation
            lastNearestWaypoint = nearestWaypoint; // Update lastNearestWaypoint to prevent repetitive updates
        }
    } else if (!isInterestPoint || nearestDistance >= 300000) {
        // If the nearest waypoint is not an interest point or is beyond the threshold distance
        if (viewer.selectedEntity) {
            viewer.selectedEntity = undefined; // Clear the selected entity
        }
        if (!viewer.clock.shouldAnimate) {
            viewer.clock.shouldAnimate = true; // Resume the animation if it was stopped
        }
        lastNearestWaypoint = null; // Reset lastNearestWaypoint if moving away from an interest point or if nearest is a road waypoint
    }
}


// Regularly check for proximity to update the infoBox accordingly
setInterval(checkWaypointProximityAndSelect, 1000);  // Check every second
function updateWaypointEntities() {
    waypoints.forEach(waypoint => {
        // Create a unique id for each waypoint entity for identification
        var id = `waypoint-${waypoint.name}`;

        // Check if the entity already exists, if not, create a new one
        var existingEntity = viewer.entities.getById(id);
        if (!existingEntity && waypoint.type !== "Road") { // Skip adding Road waypoints
          let countryCode = getCountryCodeFromName(waypoint.name); // Obtiene el código de país ISO 3166-1 alpha-2
            let flagUrl = `https://flagcdn.com/16x12/${countryCode}.png`;
            // Default values for interest waypoints
            let pointColor = Cesium.Color.CADETBLUE;
            let pixelSize = 10;
            let showLabel = true;
            
            viewer.entities.add({
                id: id,
                name: waypoint.name,
                position: Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude),
               billboard: {
                    image: flagUrl,
                    width: 32, // Puedes ajustar el tamaño según tus necesidades
                    height: 24
                },
                label: showLabel ? {
                    text: waypoint.name,
                    font: '14pt monospace',
                    fillColor: Cesium.Color.WHITE,
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    outlineWidth: 2,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -10)
                } : undefined,
                description: waypoint.description  // Set description for waypoints
            });
        }
    });
}

function getCountryCodeFromName(name) {
    // Primero, verifica que "name" es una cadena no nula y no indefinida.
    if (typeof name !== "string" || !name) {
        console.error("Nombre de waypoint inválido o indefinido:", name);
        return undefined; // O podrías retornar un código predeterminado o manejar el error como prefieras.
    }

    // Objeto de mapeo que asocia nombres de waypoints con códigos de país ISO 3166-1 alpha-2
    const nameToCountryCodeMap = {
        "Hawaii, USA": "us",
        "Japan": "jp",
        "Shanghai, China": "cn",
        "Laem Chabang Port, Thailand": "th",
        "Port Klang, Malaysia": "my",
        "Chennai, India": "in",
        "Genoa, Italy": "it",
        "Lisbon, Portugal": "pt",
        "Vigo, Spain": "es",
        "Hamburg, Germany": "de",
        "Halifax, Nova Scotia, Canada": "ca",
        "Miami, USA": "us",
        "Veracruz, Mexico": "mx",
        "Cartagena, Colombia": "co",
        "Santo Domingo, DR": "do",
        "Brazil" : "br",
        "Middle East" : "lb"
    };

    // Normaliza el nombre para manejar variaciones en la capitalización o espacios.
    const normalized = name.trim().toLowerCase();

    // Encuentra el código de país correspondiente en el objeto de mapeo, si existe.
    const countryCode = Object.keys(nameToCountryCodeMap).find(key =>
        key.trim().toLowerCase() === normalized
    );

    // Devuelve el código de país correspondiente o undefined si no se encuentra.
    return countryCode ? nameToCountryCodeMap[countryCode] : undefined;
}

// Call the function to update entities on the globe
updateWaypointEntities();

// Assuming you have your waypoints array and a Cesium viewer instance
waypoints.forEach((waypoint) => {
    if (waypoint.type === "Road") {
        // Add a point for each road waypoint
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude),
            point: {
                pixelSize: 5,
                color: Cesium.Color.YELLOW, // Choose a color that stands out
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 1
            }
        });
    }
});

// Call checkWaypointProximity periodically, for example, using setInterval
setInterval(() => {
    var shipPosition = shipModel.position.getValue(viewer.clock.currentTime);
    if (shipPosition) {
        var cartographicPosition = Cesium.Cartographic.fromCartesian(shipPosition);
        var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude).toFixed(6);
        var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude).toFixed(6);
        console.log(`Current ship position: Longitude: ${longitude}, Latitude: ${latitude}`);
    } else {
        console.log("Current ship position: Undefined");
    }
}, 5000); // Adjust the interval as needed
