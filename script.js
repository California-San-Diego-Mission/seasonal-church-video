 // Wait for the iframe to load and then initialize the player
 window.onload = function() {
  alert("script working");
  var iframe = document.getElementById('myIframe');
  var player;

  // Check if the iframe is properly loaded
  iframe.onload = function() {
    alert("iframe loaded");
    // Initialize the Brightcove player using the iframe's source
    player = videojs(iframe);

    // Listen for the 'ended' event (video completion)
    player.on('ended', function() {
      alert("The video has finished playing.");
    });
  };
};