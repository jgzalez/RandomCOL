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
    { name: "Hawaii", longitude: -157.8583, latitude: 21.3069, description: "<h2>Aloha!</h2><p>Welcome to the beautiful islands of <strong>Hawaii</strong>.</p><img src='hawaii_image_url' alt='Hawaii'>." },
    { name: "Pacific Point 1", longitude: -170, latitude: 25, description: "You've reached Pacific Point 1, navigating through the vast Pacific Ocean." },
    { name: "Pacific Point 2", longitude: 160, latitude: 30, description: "This is Pacific Point 2, closer to the Asian continent." },
    { name: "Pacific Point 3", longitude: 150, latitude: 35, description: "Approaching Japan: Pacific Point 3 achieved." },
    { name: "Japan", longitude: 139.6503, latitude: 35.6762, description: "Land of the Rising Sun: Welcome to Japan." },
    // Add descriptions for other waypoints similarly...
];

let lastNearestWaypoint = null; // This will keep track of the last nearest waypoint

// Create and add the ship model entity.
var shipModel = viewer.entities.add({
    name: 'Ship',
    position: Cesium.Cartesian3.fromDegrees(waypoints[0].longitude, waypoints[0].latitude),
    model: {
        uri: 'https://raw.githubusercontent.com/jgzalez/FlutterAct1/master/yatch_II.glb',
        minimumPixelSize: 128,
        maximumScale: 10000
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
var baseHeight = 4000000;    // Height of the camera from the ship, adjust this for a better angle
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

    // Iterate through each waypoint to find the nearest one
    waypoints.forEach(waypoint => {
        var waypointPosition = Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude);
        var distance = Cesium.Cartesian3.distance(shipPosition, waypointPosition);

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestWaypoint = waypoint;
        }
    });

    console.log(`Nearest waypoint: ${nearestWaypoint ? nearestWaypoint.name : "None"}, Distance: ${nearestDistance}`);

    // Only update the infobox if the nearest waypoint has changed
    if (nearestWaypoint && nearestDistance < 30000 && lastNearestWaypoint !== nearestWaypoint) {  // Ensure this threshold matches your needs
        var waypointEntity = viewer.entities.getById(`waypoint-${nearestWaypoint.name}`);
        if (waypointEntity) {
            console.log(`Changing selected entity to: ${waypointEntity.name}`);
            viewer.selectedEntity = waypointEntity;
            lastNearestWaypoint = nearestWaypoint;  // Update lastNearestWaypoint to prevent repetitive updates
        } else {
            console.log(`Waypoint entity '${nearestWaypoint.name}' not found.`);
        }
    }
}


// Regularly check for proximity to update the infoBox accordingly
setInterval(checkWaypointProximityAndSelect, 1000);  // Check every second

// Call this function regularly to check for proximity to waypoints
setInterval(checkWaypointProximityAndSelect, 1000); // Check every second


function updateWaypointEntities() {
    waypoints.forEach(waypoint => {
        var id = `waypoint-${waypoint.name}`;
        var existingEntity = viewer.entities.getById(id);
        if (!existingEntity) {
            viewer.entities.add({
                id: id,
                name: waypoint.name,
                position: Cesium.Cartesian3.fromDegrees(waypoint.longitude, waypoint.latitude),
                point: {
                    pixelSize: 10,
                    color: Cesium.Color.RED
                },
                description: waypoint.description
            });
        }
    });
}
updateWaypointEntities();


// Initial update for waypoint entities
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
