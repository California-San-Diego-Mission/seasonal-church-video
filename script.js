 // Wait for the iframe to load and then initialize the player
 window.onload = function() {
  var iframe = document.getElementById('myIframe');
  var player;

  // Check if the iframe is properly loaded
  iframe.onload = function() {
    // Initialize the Brightcove player using the iframe's source
    player = videojs(iframe);

    // Listen for the 'ended' event (video completion)
    player.on('ended', function() {
      console.log("Video has finished playing.");
      alert("The video has finished playing.");
    });
  };
};