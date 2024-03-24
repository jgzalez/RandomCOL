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
    { name: "Hawaii", longitude: -157.8583, latitude: 21.3069, description: "Aloha! Welcome to the beautiful islands of Hawaii.", type: "Interest" },
    { name: "Pacific Point 1", longitude: -170, latitude: 25, description: "You've reached Pacific Point 1, navigating through the vast Pacific Ocean.", type: "Road" },
    { name: "Pacific Point 2", longitude: 160, latitude: 30, description: "This is Pacific Point 2, closer to the Asian continent.", type: "Road" },
    { name: "Pacific Point 3", longitude: 150, latitude: 35, description: "Approaching Japan: Pacific Point 3 achieved.", type: "Road" },
    { name: "Japan", longitude: 139.6503, latitude: 35.6762, description: "Land of the Rising Sun: Welcome to Japan.", type: "Interest" },
    
     { name: "Yokohama, Japan", longitude: 139.6425, latitude: 35.4478, description: "Departure from Yokohama, one of Japan's major ports.", type: "Interest" },
    { name: "Offshore Point 1", longitude: 138.0, latitude: 34.5, description: "Leaving Tokyo Bay, entering the Pacific Ocean.", type: "Road" },
    { name: "Offshore Point 2", longitude: 136.5, latitude: 33.0, description: "Navigating through the Pacific, southwest of Izu Peninsula.", type: "Road" },
    { name: "Offshore Point 3", longitude: 134.0, latitude: 31.5, description: "Approaching the Kii Peninsula.", type: "Road" },
    { name: "Offshore Point 4", longitude: 132.0, latitude: 30.0, description: "Skirting the southern coast of Wakayama Prefecture.", type: "Road" },
    { name: "Offshore Point 5", longitude: 129.0, latitude: 29.0, description: "Passing south of Kyushu Island.", type: "Road" },
    { name: "Offshore Point 6", longitude: 126.0, latitude: 28.0, description: "Crossing the East China Sea.", type: "Road" },
    { name: "Offshore Point 7", longitude: 124.0, latitude: 30.0, description: "Navigating through international waters.", type: "Road" },
    { name: "Offshore Point 8", longitude: 122.5, latitude: 31.0, description: "Approaching the Yangtze River delta.", type: "Road" },
    { name: "Shanghai, China", longitude: 121.4737, latitude: 31.2304, description: "Arrival at Shanghai, one of the world's busiest ports.", type: "Interest" },
  
      { name: "Offshore Point 9", longitude: 122.0, latitude: 28.0, description: "Exiting the Yangtze River delta into the East China Sea.", type: "Road" },
    { name: "Offshore Point 10", longitude: 119.0, latitude: 25.0, description: "Bypassing the Taiwanese coast, moving into the northern part of the South China Sea.", type: "Road" },
    { name: "Offshore Point 11", longitude: 116.0, latitude: 20.0, description: "Navigating through the open waters of the South China Sea, east of Hainan.", type: "Road" },
    { name: "Offshore Point 12", longitude: 113.0, latitude: 15.0, description: "Passing by the Paracel Islands, maintaining a course in international waters.", type: "Road" },
    { name: "Offshore Point 13", longitude: 110.0, latitude: 11.0, description: "Skirting the northeastern coasts of Vietnam.", type: "Road" },
    { name: "Offshore Point 14", longitude: 107.0, latitude: 9.0, description: "Crossing south of Vietnam, approaching the Gulf of Thailand.", type: "Road" },
    { name: "Offshore Point 15", longitude: 104.0, latitude: 8.0, description: "Entering the Gulf of Thailand, steering clear of the Cambodian coast.", type: "Road" },
    { name: "Offshore Point 16", longitude: 101.0, latitude: 9.0, description: "Navigating the northern part of the Gulf of Thailand, approaching Thai waters.", type: "Road" },
    { name: "Laem Chabang Port, Thailand", longitude: 100.8805, latitude: 13.0989, description: "Departure from Laem Chabang, Thailand's busiest port, near Bangkok.", type: "Interest" },
  
    // Corrected waypoints from Thailand to Malaysia
  { name: "Offshore Point 17", longitude: 100.2, latitude: 12.5, description: "Heading southwest, moving away from the Gulf of Thailand into open sea.", type: "Road" },
    { name: "Offshore Point 18", longitude: 99.5, latitude: 10.0, description: "Clear of Thailand's southern coast, in the Andaman Sea.", type: "Road" },
    { name: "Offshore Point 19", longitude: 99.0, latitude: 8.0, description: "Further into the Andaman Sea, avoiding landmasses.", type: "Road" },
    { name: "Offshore Point 20", longitude: 98.5, latitude: 7.0, description: "Navigating deeper into the Andaman Sea, steering clear of coastal areas.", type: "Road" },
    { name: "Offshore Point 21", longitude: 98.0, latitude: 6.0, description: "Approaching the northern tip of Sumatra, continuing on a clear maritime path.", type: "Road" },
    { name: "Offshore Point 22", longitude: 98.0, latitude: 5.0, description: "Skirting around the northern coast of Sumatra, entering the Strait of Malacca.", type: "Road" },
    { name: "Offshore Point 23", longitude: 99.0, latitude: 4.0, description: "Midway through the Strait of Malacca, maintaining a safe distance from land.", type: "Road" },
    { name: "Port Klang, Malaysia", longitude: 101.3929, latitude: 3.0317, description: "Arrival at Port Klang, the main maritime gateway to Malaysia.", type: "Interest" },
    
  // Waypoints from China to India
    { name: "Offshore Point 24", longitude: 98.0, latitude: 6.0, description: "Approaching the northern tip of Sumatra, continuing on a clear maritime path.", type: "Road" },
    { name: "Offshore Point 25", longitude: 98.0, latitude: 5.0, description: "Skirting around the northern coast of Sumatra, entering the Strait of Malacca.", type: "Road" },
    { name: "Offshore Point 26", longitude: 99.0, latitude: 4.0, description: "Passing west of the Andaman and Nicobar Islands.", type: "Road" },
    { name: "Offshore Point 27", longitude: 92.0, latitude: 9.0, description: "Sailing across the northern part of the Andaman Sea into the Bay of Bengal.", type: "Road" },
    { name: "Offshore Point 28", longitude: 90.0, latitude: 13.0, description: "Continuing journey through the Bay of Bengal, approaching the Indian coast.", type: "Road" },
    { name: "Offshore Point 29", longitude: 88.0, latitude: 15.0, description: "Navigating the central Bay of Bengal, maintaining a course towards Chennai.", type: "Road" },
    { name: "Offshore Point 30", longitude: 86.0, latitude: 17.0, description: "Approaching the eastern coast of India, preparing for arrival at Chennai.", type: "Road" },
    { name: "Chennai, India", longitude: 80.2871, latitude: 13.0827, description: "Arrival at Chennai, a major port city on the southeastern coast of India.", type: "Interest" },
  
  
     { name: "Offshore Point 31", longitude: 79.0, latitude: 9.0, description: "Leaving the Bay of Bengal, rounding the Indian Peninsula.", type: "Road" },
    { name: "Offshore Point 32", longitude: 76.0, latitude: 7.0, description: "Passing by the southern tip of India, navigating near Kanyakumari.", type: "Road" },
    { name: "Offshore Point 33", longitude: 72.0, latitude: 8.0, description: "Entering the Arabian Sea, west of the Maldives.", type: "Road" },
    { name: "Offshore Point 34", longitude: 70.0, latitude: 12.0, description: "Sailing northwest, approaching the Indian west coast.", type: "Road" },
    { name: "Offshore Point 35", longitude: 68.0, latitude: 15.0, description: "Moving along the western coast of India, passing Mumbai.", type: "Road" },
    { name: "Offshore Point 36", longitude: 65.0, latitude: 20.0, description: "Continuing through the Arabian Sea, clear of the Indian coast.", type: "Road" },
    { name: "Offshore Point 37", longitude: 60.0, latitude: 23.0, description: "Approaching the Arabian Peninsula, navigating towards the Strait of Hormuz.", type: "Road" },
    { name: "Offshore Point 38", longitude: 57.0, latitude: 25.0, description: "Navigating the Strait of Hormuz, between Oman and Iran.", type: "Road" },
    { name: "Dubai, UAE", longitude: 55.8708, latitude: 25.2048, description: "Arrival at Dubai, a major global city and business hub in the United Arab Emirates.", type: "Interest" },
    // Waypoints from Middle East to Italy
      { name: "Offshore Point 31", longitude: 57.0, latitude: 25.0, description: "Exiting the Arabian Gulf, entering the Gulf of Oman.", type: "Road" },
    { name: "Offshore Point 39", longitude: 56.0, latitude: 24.0, description: "Leaving the Persian Gulf, entering the Gulf of Oman.", type: "Road" },
    { name: "Offshore Point 40", longitude: 58.0, latitude: 23.0, description: "Navigating along the coast of Oman, heading towards the Arabian Sea.", type: "Road" },
    { name: "Offshore Point 41", longitude: 60.0, latitude: 22.0, description: "Out into the Arabian Sea, making a course for the Indian Ocean.", type: "Road" },
    { name: "Offshore Point 42", longitude: 62.0, latitude: 21.0, description: "Passing by the southern coast of Iran.", type: "Road" },
    { name: "Offshore Point 43", longitude: 64.0, latitude: 20.0, description: "Approaching the entrance to the Gulf of Aden.", type: "Road" },
    { name: "Offshore Point 44", longitude: 48.0, latitude: 15.0, description: "Entering the Gulf of Aden, between Yemen and Djibouti.", type: "Road" },
    { name: "Offshore Point 45", longitude: 43.0, latitude: 14.0, description: "Sailing westward through the Bab-el-Mandeb Strait into the Red Sea.", type: "Road" },
    { name: "Offshore Point 46", longitude: 40.0, latitude: 20.0, description: "Navigating the Red Sea, heading towards the Suez Canal.", type: "Road" },
    { name: "Suez Canal Entrance", longitude: 32.532, latitude: 29.947, description: "Approaching the Suez Canal from the Red Sea.", type: "Road" },
    { name: "Suez Canal Exit", longitude: 32.349, latitude: 31.265, description: "Exiting the Suez Canal, entering the Mediterranean Sea.", type: "Road" },

    // Waypoints from Suez Canal to Italy
    { name: "Offshore Point 47", longitude: 30.0, latitude: 33.0, description: "Passing by the northern coast of Egypt.", type: "Road" },
    { name: "Offshore Point 48", longitude: 25.0, latitude: 35.0, description: "Crossing the Mediterranean, north of Libya.", type: "Road" },
    { name: "Offshore Point 49", longitude: 20.0, latitude: 37.0, description: "Navigating past the southern region of Greece.", type: "Road" },
    { name: "Offshore Point 50", longitude: 18.0, latitude: 39.0, description: "Approaching the heel of Italy's boot.", type: "Road" },
    { name: "Offshore Point 51", longitude: 15.0, latitude: 41.0, description: "Skirting the eastern coast of Italy.", type: "Road" },
    { name: "Genoa, Italy", longitude: 8.9463, latitude: 44.4056, description: "Arrival at Genoa, a major port city and the maritime gateway to Italy.", type: "Interest" },
    { name: "Offshore Point 401", longitude: 14.0, latitude: 38.0, description: "Approaching the southern tip of Italy, preparing for the final leg to Genoa.", type: "Road" },
    { name: "Genoa, Italy", longitude: 8.9463, latitude: 44.4056, description: "Arrival at Genoa, a major port city in Italy with a rich history and culture.", type: "Interest" },
    { name: "Offshore Point 411", longitude: 8.0, latitude: 42.0, description: "Navigating past the northwestern coast of Italy.", type: "Road" },
    { name: "Offshore Point 421", longitude: 5.0, latitude: 40.0, description: "Approaching the French Riviera, near Nice and Monaco.", type: "Road" },
    { name: "Offshore Point 431", longitude: 3.0, latitude: 39.0, description: "Passing by the Balearic Islands in the western Mediterranean.", type: "Road" },
    { name: "Offshore Point 441", longitude: 0.5, latitude: 38.0, description: "Crossing the sea near Valencia, Spain, heading towards the Strait of Gibraltar.", type: "Road" },
    { name: "Offshore Point 451", longitude: -5.0, latitude: 36.0, description: "Entering the Strait of Gibraltar, the gateway between the Mediterranean Sea and the Atlantic Ocean.", type: "Road" },
    { name: "Offshore Point 461", longitude: -7.0, latitude: 37.0, description: "Navigating off the southern coast of Portugal, near the Algarve region.", type: "Road" },
    { name: "Offshore Point 471", longitude: -9.0, latitude: 38.5, description: "Approaching Lisbon, preparing for arrival at the port.", type: "Road" },
    { name: "Lisbon, Portugal", longitude: -9.1372, latitude: 38.7080, description: "Arrival at Lisbon, the capital and largest city of Portugal, known for its historical sites and cultural significance.", type: "Interest" },
    { name: "Offshore Point 481", longitude: -9.5, latitude: 39.5, description: "Sailing north along the western coast of Portugal.", type: "Road" },
    { name: "Offshore Point 491", longitude: -8.5, latitude: 41.0, description: "Approaching the northern Portuguese coast, near Porto.", type: "Road" },
    { name: "Offshore Point 501", longitude: -8.9, latitude: 42.0, description: "Entering Spanish waters, navigating towards Galicia.", type: "Road" },
    { name: "Vigo, Spain", longitude: -8.7226, latitude: 42.2406, description: "Arrival at Vigo, one of Spain's busiest fishing ports and the gateway to the Atlantic.", type: "Interest" },
 { name: "Offshore Point 591", longitude: -8.0, latitude: 44.0, description: "Navigating north along the western coast of France, towards the Bay of Biscay.", type: "Road" },
    { name: "Offshore Point 60", longitude: -6.0, latitude: 46.0, description: "Crossing the Bay of Biscay towards the Brittany coast of France.", type: "Road" },
    { name: "Offshore Point 61", longitude: -4.0, latitude: 48.0, description: "Approaching the entrance to the English Channel, near Brest, France.", type: "Road" },
    { name: "Offshore Point 62", longitude: -2.0, latitude: 50.0, description: "Passing through the English Channel, navigating between England and France.", type: "Road" },
    { name: "Offshore Point 63", longitude: 0.0, latitude: 52.0, description: "Continuing through the English Channel, heading towards the North Sea.", type: "Road" },
    { name: "Offshore Point 64", longitude: 2.0, latitude: 54.0, description: "Entering the North Sea, passing by the southeastern coast of England.", type: "Road" },
    { name: "Offshore Point 65", longitude: 4.0, latitude: 56.0, description: "Navigating the North Sea, parallel to the Netherlands and Denmark.", type: "Road" },
    { name: "Hamburg, Germany", longitude: 9.9937, latitude: 53.5511, description: "Arrival at Hamburg, a major port city in northern Germany connected to the North Sea.", type: "Interest" },
    { name: "Offshore Point 66", longitude: 7.0, latitude: 55.0, description: "Leaving the North Sea, entering the Norwegian Sea.", type: "Road" },
    { name: "Offshore Point 67", longitude: -5.0, latitude: 57.0, description: "Navigating past the northern tip of the British Isles into the open Atlantic.", type: "Road" },
    { name: "Offshore Point 68", longitude: -20.0, latitude: 60.0, description: "Crossing the northern Atlantic, moving between Iceland and the Faroe Islands.", type: "Road" },
    { name: "Offshore Point 69", longitude: -40.0, latitude: 55.0, description: "Mid-Atlantic route, halfway between Europe and North America.", type: "Road" },
    { name: "Offshore Point 70", longitude: -50.0, latitude: 50.0, description: "Approaching Canadian waters, navigating through cooler northern currents.", type: "Road" },
    { name: "Offshore Point 71", longitude: -55.0, latitude: 45.0, description: "Entering the approaches to the Gulf of Saint Lawrence.", type: "Road" },
    { name: "Offshore Point 72", longitude: -60.0, latitude: 44.0, description: "Passing by Sable Island, preparing for the final approach to Halifax.", type: "Road" },
    { name: "Halifax, Nova Scotia, Canada", longitude: -63.5752, latitude: 44.6488, description: "Arrival at Halifax, a key port city on the eastern seaboard of Canada.", type: "Interest" },
    { name: "Offshore Point 73", longitude: -66.0, latitude: 43.0, description: "Leaving the Canadian coastline, heading towards the eastern seaboard of the USA.", type: "Road" },
    { name: "Offshore Point 74", longitude: -69.0, latitude: 40.0, description: "Passing by the New England coast, avoiding major shipping lanes and obstacles.", type: "Road" },
    { name: "Offshore Point 75", longitude: -72.0, latitude: 37.0, description: "Navigating around the outer banks of North Carolina.", type: "Road" },
    { name: "Offshore Point 76", longitude: -75.0, latitude: 34.0, description: "Skirting past Cape Hatteras, continuing southward along the US East Coast.", type: "Road" },
    { name: "Offshore Point 77", longitude: -77.0, latitude: 31.0, description: "Approaching the Georgia-Florida border, preparing for entry into Florida waters.", type: "Road" },
    { name: "Miami, USA", longitude: -80.1918, latitude: 25.7617, description: "Arrival at Miami, a major center for international trade and tourism.", type: "Interest" },
    { name: "Offshore Point 78", longitude: -81.0, latitude: 25.0, description: "Leaving the Florida Straits, heading into the Gulf of Mexico.", type: "Road" },
    { name: "Offshore Point 79", longitude: -85.0, latitude: 24.0, description: "Navigating the southeastern waters of the Gulf of Mexico.", type: "Road" },
    { name: "Offshore Point 80", longitude: -87.0, latitude: 22.0, description: "Passing west of Cuba, maintaining course through the Gulf.", type: "Road" },
    { name: "Offshore Point 81", longitude: -90.0, latitude: 21.0, description: "Approaching the Yucatan Channel, between Cuba and Mexico.", type: "Road" },
    { name: "Offshore Point 82", longitude: -93.0, latitude: 20.0, description: "Sailing along the southern Gulf of Mexico, near the Yucatan Peninsula.", type: "Road" },
    { name: "Veracruz, Mexico", longitude: -96.1342, latitude: 19.1738, description: "Arrival at Veracruz, an important maritime gateway and historical port city in Mexico.", type: "Interest" },
    { name: "Offshore Point 83", longitude: -94.0, latitude: 18.0, description: "Heading south from the Mexican coast into the Gulf of Mexico.", type: "Road" },
    { name: "Offshore Point 84", longitude: -91.0, latitude: 17.0, description: "Passing by the Yucatan Peninsula, entering the Caribbean Sea.", type: "Road" },
    { name: "Offshore Point 85", longitude: -88.0, latitude: 16.0, description: "Navigating along the eastern coast of Belize.", type: "Road" },
    { name: "Offshore Point 86", longitude: -85.0, latitude: 14.0, description: "Sailing southward near the coastlines of Honduras and Nicaragua.", type: "Road" },
    { name: "Offshore Point 88", longitude: -83.0, latitude: 12.0, description: "Continuing past the Caribbean coast of Costa Rica and Panama.", type: "Road" },
    { name: "Offshore Point 89", longitude: -81.0, latitude: 10.0, description: "Approaching the San Blas Islands and navigating through the Colombian Basin.", type: "Road" },
    { name: "Offshore Point 90", longitude: -79.0, latitude: 9.0, description: "Passing close to the northeastern coast of Panama, near the Caribbean entrance of the Panama Canal.", type: "Road" },
    { name: "Cartagena, Colombia", longitude: -75.5258, latitude: 10.4028, description: "Arrival at Cartagena, a major port city on Colombia’s Caribbean coast.", type: "Interest" },
    { name: "Offshore Point 91", longitude: -74.0, latitude: 9.0, description: "Navigating southeast along the Caribbean coast of Colombia.", type: "Road" },
    { name: "Offshore Point 92", longitude: -70.0, latitude: 8.0, description: "Passing the Guajira Peninsula, moving towards the open Atlantic waters.", type: "Road" },
    { name: "Offshore Point 93", longitude: -65.0, latitude: 6.0, description: "Approaching the northeastern coast of Venezuela.", type: "Road" },
    { name: "Offshore Point 94", longitude: -60.0, latitude: 5.0, description: "Sailing past the Orinoco River delta, avoiding shallow waters and river outflows.", type: "Road" },
    { name: "Offshore Point 95", longitude: -55.0, latitude: 2.0, description: "Navigating clear of the Amazon River delta and the coastal waters of Guyana.", type: "Road" },
    { name: "Offshore Point 96", longitude: -50.0, latitude: 0.0, description: "Entering Brazilian waters, moving along the coast of Amapá and Pará.", type: "Road" },
    { name: "Offshore Point 97", longitude: -46.0, latitude: -2.0, description: "Continuing down the northern coast of Brazil, past the state of Maranhão.", type: "Road" },
    { name: "Offshore Point 98", longitude: -42.0, latitude: -5.0, description: "Sailing along the northeastern coast of Brazil, bypassing the states of Piauí and Ceará.", type: "Road" },
    { name: "Offshore Point 99", longitude: -39.0, latitude: -8.0, description: "Passing the easternmost point of South America, Cape São Roque.", type: "Road" },
    { name: "Offshore Point 100", longitude: -38.0, latitude: -12.0, description: "Skirting the coast of Bahia, navigating the South Atlantic currents.", type: "Road" },
    { name: "Offshore Point 101", longitude: -46.0, latitude: -24.0, description: "Approaching the port of Santos, preparing for entry and berthing procedures.", type: "Road" },
    { name: "Santos, Brazil", longitude: -46.3350, latitude: -23.9608, description: "Arrival at Santos, the largest seaport in Latin America and a critical point for Brazilian trade.", type: "Interest" },
  
];


let lastNearestWaypoint = null; // This will keep track of the last nearest waypoint

// Create and add the ship model entity.
var shipModel = viewer.entities.add({
    name: 'Ship',
    position: Cesium.Cartesian3.fromDegrees(waypoints[0].longitude, waypoints[0].latitude),
    model: {
        uri: 'https://raw.githubusercontent.com/jgzalez/FlutterAct1/master/yatch_II.glb',
        minimumPixelSize: 128,
        maximumScale: 5000
    }
});

// Automatically zoom the camera to the ship model after adding it to the scene.
viewer.zoomTo(shipModel);

// Set up the position property for animating the ship's movement.
var positionProperty = new Cesium.SampledPositionProperty();
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
var baseHeight = 6500000;    // Height of the camera from the ship, adjust this for a better angle
var startAngle = -Math.PI / 4; // Starting angle for the camera's horizontal position relative to the ship
var angleVariation = Math.PI / 18; // Reduced range of the angle variation for smoother effect

var totalAnimationTime = 600; // Time for one cycle of the angle animation for slower movement
var animationStartTime = viewer.clock.currentTime.secondsOfDay; // The start time of the animation

var lastCameraPosition = null; // Keep track of the last camera position for smoothing
var dampingFactor = 0.01; // Damping factor to smooth out camera movements

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
        if (!existingEntity) {
            // Default values for interest waypoints
            let pointColor = Cesium.Color.RED;
            let pixelSize = 10;
            let showLabel = true;
            
            // Adjustments for road waypoints
            if (waypoint.type === "Road") {
                pointColor = Cesium.Color.WHITE;
                pixelSize = 5;
                showLabel = false;  // Don't show label for road waypoints
            }

            viewer.entities.add({
                id: id,
                name: waypoint.name,
                position: Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude),
                point: {
                    pixelSize: pixelSize,
                    color: pointColor
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
                description: showLabel ? waypoint.description : undefined  // Set description only for interest waypoints
            });
        }
    });
}

// Call the function to update entities on the globe
updateWaypointEntities();


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
